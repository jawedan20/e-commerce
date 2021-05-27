import Image from "next/image";

const Product = () => {
  return (
    <div >
      <div>
        <Image src="/a.jpeg" width="fit-content" height="fit-content" />
      </div >
      <div>
        <h5>Baju Baru Allhamdullillah </h5>
        <h5>Rp1000.000</h5>
      </div>
    </div>
  );
};

export default Product;
