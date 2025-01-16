import { useParams } from "react-router";
import ManuFacturingPage from "./Manufacturing";
import FabricationEPC from "./FabricationEPC";
import ExpeditingInspection from "./ExpeditingInspection";
import Trading from "./Trading";

const ServicePage = () => {
    const params = useParams();
    return (
        <>
            {params.name === "manufacturing" && <ManuFacturingPage />}
            {params.name === "expediting-inspection" && <ExpeditingInspection />}
            {params.name === "trading" && <Trading />}
            {params.name === "fabrication-epc" && <FabricationEPC />}
        </>
    )
}

export default ServicePage