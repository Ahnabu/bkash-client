import MenuItem from "./MenuItem";
import { IoSend } from "react-icons/io5";
import { FcMoneyTransfer } from "react-icons/fc";
import { FaHistory } from "react-icons/fa";
const UserMenu = () => {
    return (
        <div>
            <MenuItem
                label='Send Money'
                address='send-money'
                className="rounded"
                icon={IoSend}
            />
            <MenuItem
                icon={FcMoneyTransfer}
                label='Cash Out'
                address='cash-out'
            />
            <MenuItem
                icon={FaHistory}
                label='Transaction History'
                address='transaction-history'
            />
        </div>
    );
};

export default UserMenu;