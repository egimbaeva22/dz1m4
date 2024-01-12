import React from 'react';

const user = {
    name: "Hedy Lamarr",
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 150
}
const user1 = {
    name: "Marilyn Monroe",
    imageUrl: 'https://untitled-magazine.com/online/wp-content/uploads/2016/06/Marilyn_Monroe_1953_crop.jpg',
    imageSize: 150
}
export default function Profile() {
    return (
        <>
            <div>
                <h1>{user.name}</h1>
                <img
                    className="avatar"
                    src={user.imageUrl}
                    alt={"Photo of " + user.name}
                    style={{ width: user.imageSize, height: user.imageSize }}
                />
            </div>
            <div>
                <h1>{user1.name}</h1>
                <img
                    className="avatar"
                    src={user1.imageUrl}
                    alt={"Photo of " + user1.name}
                    style={{ width: user1.imageSize, height: user1.imageSize }}
                />
            </div>
        </>
    );
}



