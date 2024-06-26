import { useState } from "react";
import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { removeApi } from "../../apis/baseCrudApi";
import { fetchData } from "../../store/slices/tableSlice";
import handleError from "../../helpers/handleError";
import Button from "../../ui/button";
import ConfirmDialog from "../../ui/confirm-dialog";
import { successAlert } from "../../helpers/alertMessage";

const DeleteModal = ({ id, message, endpoint, params, fetchEndpoint = null }) => {

    const [showDialog, setShowDialog] = useState(false);
    const dispatch = useDispatch();

    const handleDelete = () => {
        setShowDialog(true);
    }

    const remove = async () => {
        try {
            await removeApi(`${endpoint}/${id}`);
            successAlert('Removed successfully');
            setShowDialog(false);

            dispatch(fetchData({ endpoint: fetchEndpoint ?? endpoint, params }));
        } catch (error) {
            handleError(error);
        }
    }

    return (
        <div>
            <Button variant="danger" onClick={handleDelete}>
                Delete
            </Button>
            {showDialog && <ConfirmDialog title="Delete Record" message={message} onConfirm={remove} closeDialog={() => setShowDialog(false)} />}
        </div>
    )
}

DeleteModal.propTypes = {
    id: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired,
    endpoint: PropTypes.string.isRequired,
    params: PropTypes.object,
    fetchEndpoint: PropTypes.string
}

export default DeleteModal;