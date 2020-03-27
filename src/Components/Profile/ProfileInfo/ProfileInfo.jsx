import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='data:image/jpeg;base64,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' />
            </div>
            <div className={s.descriptionBlock}>
                Avatar+description
            </div>
        </div>
    );
}

export default ProfileInfo;