import { useSelector } from 'react-redux';
import { Col } from 'reactstrap';
import { selectAllPartners } from './partnersSlice';
import Partner from './Partner';

const PartnersList = () => {
    const partners = useSelector(selectAllPartners);

    return (
        <Col className='mt-4'>
            {
                partners.map((partner, idx) => {
                    return (
                        <div key={idx}>
                            <Partner partner={partner}/>
                        </div>
                    )
                })
            }
        </Col>
    )
};

export default PartnersList;