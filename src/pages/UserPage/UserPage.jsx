import { useParams } from 'react-router-dom';
import KnifeCards from '../../components/KnifeCards/KnifeCard';
import { useTranslation } from 'react-i18next';
function UserPage() {
    const { t } = useTranslation();
    const { id } = useParams();
    const allCards = [
        ...t('knifecards', { returnObjects: true }),
        ...t('lights', { returnObjects: true }),
    ];
    const needCard = allCards.find((item) => (item.id === id));
    return (
        <div>
            <KnifeCards
                itemId={needCard.id}
                title={needCard.title}
                steel={needCard.steel}
                materials={needCard.materials}
                reviews={needCard.reviews}
                reviewstext={needCard.reviewsText}
                price={needCard.price}
                currency={needCard.currency}
                imgsrc={needCard.image}
            />
        </div>
    );
}

export default UserPage;