import React from "react";

// Images
import PreviewAlison from "../../assets/templates/alison/preview.png";
import MainButton from "../Buttons/MainButton";
import { HoverEye } from "../../assets/Icons";
import OptionButton from "../Buttons/OptionButton";
// import PreviewBliss from "../../assets/templates/bliss/preview.png";
// import PreviewCharm from "../../assets/templates/charm/preview.png";
// import PreviewCharm2 from "../../assets/templates/charm2/preview.png"
// import PreviewEnchant from "../../assets/templates/enchant/preview.png";
// import PreviewEvermore from "../../assets/templates/evermore/preview.png";
// import PreviewSorliene from "../../assets/templates/sorliene/preview.png";
// import PreviewSorlieneThumb from "../../assets/templates/sorliene/thumb.png";

function TemplateCard() {
  return (
    <div className="bg-[#F7F7F7] group relative rounded-sm p-10">
      <img src={PreviewAlison} alt="template-card.png" />
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-6 bg-[#AEAEAE]/80 rounded-sm">
        <div className="w-12 h-12 bg-white flex items-center justify-center rounded-full">
          <HoverEye />
        </div>
          <MainButton label={"buat undangan"} directTo="buat-undangan" />
          <OptionButton label={"preview"} directTo="preview-undangan" className="w-full" />
      </div>
    </div>
  );
}

export default TemplateCard;
