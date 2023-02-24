import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../stores/reducers.js/userReducer";
import UserIcon from "./shared/UserIcon";

const Stories = () => {
    const { data } = useSelector((state) => state.user);
    const dispactcher = useDispatch();

    useEffect(() => {
        dispactcher(fetchUsers());
    }, []);

    return (
        <div className="flex gap-6 justify-start py-4 px-4 rounded-xl border border-gray-200 overflow-x-scroll w-full">
            {data.map((el) => (
                <div
                    key={el.id}
                    className="flex flex-col gap-1 justify-center items-center w-16"
                >
                    <UserIcon user={el} size={"3.8rem"} />
                    <p
                        className="text-xs w-16"
                        style={{
                            textOverflow: "ellipsis",
                            overflow: "hidden",
                            whiteSpace: "nowrap",
                        }}
                    >
                        {el?.username}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default Stories;
