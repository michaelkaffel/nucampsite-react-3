import { useSelector } from 'react-redux';
import { Col, Row } from 'reactstrap';
import { selectAllPartners } from './partnersSlice';
import Partner from './Partner';
import Error from '../../components/Error';
import Loading from '../../components/Loading';



const PartnersList = () => {
    const partners = useSelector(selectAllPartners);

    const isLoading = useSelector((state) => state.partners.isLoading);
    const errMsg = useSelector((state) => state.partners.errMsg);

    return isLoading ? (
        <Loading />
    ) : errMsg ? (
        <Error errMsg={errMsg} />
    ) : (
        <Col className='mt-4'>
            <Row>
                {
                    partners.map((partner, idx) => {
                        return (
                            <div key={idx}>
                                <Partner partner={partner} />
                            </div>
                        )
                    })
                }
            </Row>
        </Col>
    )
};

export default PartnersList;