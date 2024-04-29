import DetailDescription from "./DetailDescription";
import DetailHeading from "./DetailHeading";
import styles from './BenefitDetail.module.css';

function BenefitDetail(props)
{
    return (<div className={styles.container}>
        <div className={styles.countHeading}>
            <h2 className={styles.countText}>{props.indexValue}</h2>
        </div>
        <div className={styles.content}>
            <DetailHeading heading={props.heading}/>
            <DetailDescription description={props.description}/>
        </div>
        <div className={styles.externalLink}>
            <a href={props.detailLink}><img className={styles.externalLinkImage} src={process.env.PUBLIC_URL + '/images/course-detail-images/curvedArrow.svg'}/></a>
        </div>
    </div>);
}

export default BenefitDetail;