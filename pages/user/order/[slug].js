import axios from "../../../utils/axios";
import Transaction from "../../../components/Transaction";
const DetailOrder = ({data}) => {
    return (
        <>
            <Transaction data={data} />
        </>
    )
}

export default DetailOrder


export async function getServerSideProps({params}) {
    try {
        const res = await axios.get(`/api/order/${params.slug}/`);
        if (!res.data) {
            return {
                notFound: true,
            };
        }
        console.log(res.data)
        return {
            props: {
                data: res.data,
            }, // will be passed to the page component as props
        };
    } catch (error) {
        return {
            notFound: true,
        };
    }
}
