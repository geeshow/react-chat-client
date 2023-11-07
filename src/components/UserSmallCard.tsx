import {UserDto} from "../dto/DefaultDto";

interface UserSmallCardProps {
    user: UserDto;
    isHost: boolean;
}
const UserSmallCard: React.FC<UserSmallCardProps> = ({ user , isHost}) => {
    return (
        <div className="max-w-sm mr-2 bg-white sm:flex sm:items-center">
            <span>
                {user.emoji}
            </span>
            <span className={isHost ? "font-bold after:content-['(host)']" : ""}>
                {user.nickname}
            </span>
        </div>
    )
}
export default UserSmallCard;
