import { GeneralProperties } from "../types";

function GeneralCard({generalInfo, setGeneralInfo}: GeneralProperties, ) {

    const handleSetInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const key = e.target.name;
        setGeneralInfo({...generalInfo, [key]: value});
    }

    return (
        <>
        <input
        type="text"
        name="name"
        placeholder="Name"
        onChange={handleSetInfo}
        value={generalInfo.name}>
        </input>
        <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleSetInfo}
        value={generalInfo.email}>
        </input>
        <input
        type="tel"
        name="phoneNumber"
        placeholder="Phone Number"
        onChange={handleSetInfo}
        value={generalInfo.phoneNumber}>
        </input>
        </>
    );
}

export default GeneralCard;