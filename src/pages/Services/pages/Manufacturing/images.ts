import Pipes from "../../../../assets/images/products-manufactured/pipes.png";
import Flanges from "../../../../assets/images/products-manufactured/flanges.png";
import PipeFittings from "../../../../assets/images/products-manufactured/fittings.png";
import Fasteners from "../../../../assets/images/products-manufactured/fasteners.png";
import SheetsAndPlates from "../../../../assets/images/products-manufactured/sheets.png";
import HandRailing from "../../../../assets/images/products-manufactured/railing.png";


import ManufacturingFacilities1 from "../../../../assets/images/manufacturing-facility-1.png"
import ManufacturingFacilities2 from "../../../../assets/images/manufacturing-facility-2.png"
import ManufacturingFacilities3 from "../../../../assets/images/manufacturing-facility-3.png"

const images = {
  facilities: [
    { id: 1, img: ManufacturingFacilities1 },
    { id: 2, img: ManufacturingFacilities2 },
    { id: 3, img: ManufacturingFacilities3 },

  ],
  fasteners: [
    { id: 1, img: Pipes },
    { id: 2, img: Pipes },
    { id: 3, img: Pipes },
    { id: 4, img: Pipes },
    { id: 5, img: Pipes },
  ],
  productsManufactured: [
    { id: 1, img: Pipes, name: "Pipes" },
    { id: 2, img: Flanges, name: "Flanges" },
    { id: 3, img: PipeFittings, name: "Pipe Fittings" },
    { id: 4, img: Fasteners, name: "Fasteners" },
    // { id: 5, img: SheetsAndPlates, name: "Sheets/Plates" },
    // { id: 6, img: HandRailing, name: "Hand railing" },
  ],
};

export default images
