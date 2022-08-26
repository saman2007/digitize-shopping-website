import AboutField from "./AboutField";
import Field from "./Field";
import FieldItem from "./FieldItem";

const AllFields = ({ datas }) => {
  return (
    <>
      {datas.map((data, index1) => (
        <Field key={index1}>
          <AboutField
            alt={data.alt}
            cover={data.cover}
            path={data.path}
            title={data.title}
          />
          {data.items.map((value, index2) => (
            <FieldItem {...value} key={index2} />
          ))}
        </Field>
      ))}
    </>
  );
};

export default AllFields;
