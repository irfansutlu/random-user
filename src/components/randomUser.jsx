import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { FiMail } from "react-icons/fi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GrMapLocation } from "react-icons/gr";

const RandomUser = () => {
  const url = "https://randomuser.me/api/";
  const [person, setPerson] = useState({});

  const getUser = async () => {
    const { data } = await axios(url);
    setPerson(data.results[0]);
  };
  useEffect(() => {
    getUser();
  }, []);

  const { dob, email, id, location, name, phone, picture, registered } = person;

  return (
    <>
      <div className="container" key={id?.value}>
        <div className="gnrl-div">
          <img src={picture?.large} />
          <h2>
            {name?.title}. {name?.first} {name?.last}
          </h2>
        </div>
        <div className="gnrl-div">
          <h3>
            <FiMail size="4rem" color="gray" />
          </h3>
          <h4>{email}</h4>
        </div>
        <div className="gnrl-div">
          <h3>
            <BsFillTelephoneFill size="4rem" color="rgb(82, 82, 82)" />
          </h3>
          <h4>{phone}</h4>
        </div>
        <div className="gnrl-div">
          <h3>
            <GrMapLocation size="4rem" />
          </h3>
          <h4>
            {location?.city} - {location?.country}
          </h4>
        </div>
        <p>Age: {dob?.age}</p>
        <p>
          Register Date:{" "}
          {String(registered?.date).slice(0, 10).replaceAll("-", " / ")}
        </p>
      </div>
      <button onClick={() => getUser()}>Random User</button>
    </>
  );
};
export default RandomUser;
