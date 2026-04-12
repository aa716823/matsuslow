import { useRef, useEffect, useState, useCallback } from 'react'
import frameImage from './assets/image.svg'
import bgImage from './assets/background.png'
import styles from './CameraPage.module.css'

const frameImg = new Image()
frameImg.src = frameImage

export default function CameraPage() {
  const videoRef   = useRef(null)
  const streamRef  = useRef(null)

  const [phase, setPhase]               = useState('camera')
  const [cameraError, setCameraError]   = useState(null)
  const [photoDataUrl, setPhotoDataUrl] = useState(null)
  const [facingMode, setFacingMode]     = useState('environment')

  useEffect(() => {
    let cancelled = false
    async function startCamera() {
      try {
        const s = await navigator.mediaDevices.getUserMedia({
          video: { facingMode, width: { ideal: 1280 }, height: { ideal: 960 } },
          audio: false,
        })
        if (cancelled) { s.getTracks().forEach(t => t.stop()); return }
        streamRef.current = s
        if (videoRef.current) {
          videoRef.current.srcObject = s
          await videoRef.current.play()
        }
      } catch (e) {
        if (!cancelled) setCameraError('無法存取相機，請確認已授予相機權限。')
      }
    }
    if (phase === 'camera') startCamera()
    return () => {
      cancelled = true
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(t => t.stop())
        streamRef.current = null
      }
    }
  }, [phase, facingMode])

  const handleCapture = useCallback(async () => {
    const video = videoRef.current
    if (!video) return
    const size = 1080
    const canvas = document.createElement('canvas')
    canvas.width = size
    canvas.height = size
    const ctx = canvas.getContext('2d')
    ctx.fillStyle = '#ffffff'
    ctx.fillRect(0, 0, size, size)
    const vw = video.videoWidth  || 640
    const vh = video.videoHeight || 480
    const crop = Math.min(vw, vh)
    const sx = (vw - crop) / 2
    const sy = (vh - crop) / 2
    ctx.save()
    if (facingMode === 'user') {
      ctx.translate(size, 0)
      ctx.scale(-1, 1)
    }
    ctx.drawImage(video, sx, sy, crop, crop, 0, 0, size, size)
    ctx.restore()
    await new Promise(resolve => {
      if (frameImg.complete) { resolve(); return }
      frameImg.onload = resolve
    })
    ctx.drawImage(frameImg, 0, 0, size, size)
    ctx.globalCompositeOperation = 'source-over'
    setPhotoDataUrl(canvas.toDataURL('image/jpeg', 0.92))
    setPhase('preview')
  }, [])

  const handleRetake = useCallback(() => {
    setPhotoDataUrl(null)
    setPhase('camera')
  }, [])

  const handleFlipCamera = useCallback(() => {
    setCameraError(null)
    setFacingMode(prev => prev === 'user' ? 'environment' : 'user')
  }, [])

  const handleDownload = useCallback(() => {
    if (!photoDataUrl) return
    const a = document.createElement('a')
    const ts = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19)
    a.download = `matsu-photo-${ts}.jpg`
    a.href = photoDataUrl
    a.click()
  }, [photoDataUrl])

  return (
    <div className={styles.page} style={{ '--bg-image': `url(${bgImage})` }}>
      {phase === 'camera' && (
        <button
          className={styles.flipBtn}
          onClick={handleFlipCamera}
          aria-label="切換相機"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
            <path d="M20 7h-3a2 2 0 0 1-2-2V2" />
            <path d="M9 2H4a2 2 0 0 0-2 2v4" />
            <path d="M4 17H2v4h4" />
            <path d="M20 17h2v4h-4" />
            <circle cx="12" cy="12" r="3" />
          </svg>
          切換前後鏡頭
        </button>
      )}
      {phase === 'preview' && (
        <p className={styles.hintText}>長按圖片進行下載</p>
      )}
      <div className={styles.viewportWrapper}>
        {phase === 'camera' ? (
          cameraError
            ? <div className={styles.errorMsg}>{cameraError}</div>
            : <video
                ref={videoRef}
                className={`${styles.video} ${facingMode === 'user' ? styles.videoMirror : ''}`}
                autoPlay
                playsInline
                muted
              />
        ) : (
          <img
            src={photoDataUrl}
            className={styles.previewImg}
            alt="拍照預覽"
          />
        )}
        {phase === 'camera' && (
          <img
            src={frameImage}
            className={styles.frameOverlay}
            alt="相框"
            aria-hidden="true"
          />
        )}
      </div>
      <div className={styles.controls}>
        {phase === 'camera' ? (
          <button
            className={styles.shutterBtn}
            onClick={handleCapture}
            disabled={!!cameraError}
            aria-label="拍照"
          />
        ) : (
          <div className={styles.actionRow}>
            <button className={styles.actionBtn} onClick={handleRetake}>重  拍</button>
          </div>
        )}
      </div>
    </div>
  )
}
