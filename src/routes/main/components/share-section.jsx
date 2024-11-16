import { Button } from 'components/button';
import { SectionLayout } from './section-layout';

export const ShareSection = () => {
  const shareCardInfo = [
    {
      title: 'STEP 1',
      description: '오늘의 운세를 확인하세요',
      img: '/images/capture1.png',
    },
    {
      title: 'STEP 2',
      description: '공유할 친구를 선택하세요',
      img: '/images/capture2.png',
    },
  ];

  return (
    <SectionLayout>
      <div className="w-full flex flex-col items-center gap-[80px]">
        <div className="w-full flex mobile:flex-col mobile:gap-4 justify-between items-center">
          <div className="space-y-6 mobile:space-y-2">
            <h3 className="text-left text-4xl mobile:text-2xl mobile:text-center nanum-extra-bold text-neutral-800">
              사주 공유하기
            </h3>
            <p className="text-xl mobile:text-sm font-bold text-neutral-800">
              채팅으로 사주를 공유해보세요
            </p>
          </div>
          <a href="/chat">
            <Button className="w-[250px] h-[50px] mobile:w-[200px] mobile:h-[40px] mobile:text-sm" isRounded={true}>
              1:1 채팅 하러가기
            </Button>
          </a>
        </div>
        <div className="flex mobile:flex-col gap-10 justify-center mobile:max-w-[340px]">
          {shareCardInfo.map((card) => (
            <ShareCard
              key={card.title}
              title={card.title}
              description={card.description}
              img={card.img}
            />
          ))}
        </div>
      </div>
    </SectionLayout>
  );
};

const ShareCard = ({ title, description, img }) => {
  return (
    <div className="flex flex-col rounded-xl shadow-md max-w-[450px] max-h-[378px] overflow-hidden">
      <img src={img} alt={title} />
      <div className="p-5 flex flex-col items-start gap-1.5">
        <h4 className="text-base font-normal text-neutral-800">{title}</h4>
        <p className="text-xl font-extrabold text-neutral-800">{description}</p>
      </div>
    </div>
  );
};
