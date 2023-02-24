import React from "react";

const UserIcon = ({ user, size }) => {
    return (
        <div className="w-fit p-1 rounded-[50%] border story-border">
            <div
                style={{ width: size, height: size }}
                className="rounded-full overflow-hidden border-[3px]"
            >
                <img src={user?.profile_picture} />
            </div>
        </div>
    );
};

export default UserIcon;
