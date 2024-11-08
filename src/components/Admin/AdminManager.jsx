import { useParams } from "react-router-dom";
import FormProduct from "./FormProduct";
import { adminConfig } from "../../config/config";
import CardManager from "./CardManager";

const AdminManager = () => {
    //  Traer el password por params.
    const { password } = useParams();
    const adminpassword = adminConfig.password

    //  Compara la contraseña con la contraseña que viene por .env
    if (password == adminpassword) return (
        <>
            <FormProduct />
            <CardManager />
        </>)

    return (
        <div>
            Pagina no disponible. Solo paras admins.
        </div>
    );
};

export default AdminManager;
