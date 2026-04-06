import organizationImage from '../assets/organization.png';

// ── 調整參數（僅桌機/平板生效，手機版不裁切）────────────
// 修改這兩個 class 中的數值即可調整裁切量
// ─────────────────────────────────────────────

export default function Organization() {
  return (
    <section className="py-4 px-4 bg-[#1f1f1f]">
      <div className="max-w-7xl mx-auto overflow-hidden">
        <img
          src={organizationImage}
          alt="主辦單位"
          className="w-full object-contain md:-mt-[84px] md:-mb-[57px]"
        />
      </div>
    </section>
  );
}
