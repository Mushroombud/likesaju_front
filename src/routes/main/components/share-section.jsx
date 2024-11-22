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
      <SectionLayout
          outerLayerClassName="h-fit md:h-auto"
          innerLayerClassName="h-fit py-20 md:py-16"
      >
        <div className="w-full h-full flex flex-col gap-20 md:gap-10">
          {/* Header Section */}
          <div className="w-full flex flex-col md:flex-row md:justify-between md:items-center gap-4 md:gap-0">
            <div className="space-y-2 md:space-y-6 text-center md:text-left">
              <h3 className="text-2xl md:text-4xl font-extrabold text-neutral-800 dark:text-white">
                사주 공유하기
              </h3>
              <p className="text-sm md:text-xl font-bold text-neutral-800 dark:text-white">
                채팅으로 사주를 공유해보세요
              </p>
            </div>
            <a href="/chat">
              <Button
                  className="w-[180px] h-[40px] text-sm md:w-[250px] md:h-[50px] md:text-base"
                  isRounded={true}
              >
                1:1 채팅 하러가기
              </Button>
            </a>
          </div>

          {/* Card Section */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-10 justify-center">
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
      <div className="flex flex-col rounded-xl shadow-md w-full max-w-[350px] md:max-w-[450px] overflow-hidden dark:bg-neutral-400">
        <img src={img} alt={title} className="w-full object-cover" />
        <div className="p-4 md:p-5 flex flex-col items-start gap-1.5">
          <h4 className="text-sm md:text-base font-normal text-neutral-800">
            {title}
          </h4>
          <p className="text-base md:text-xl font-extrabold text-neutral-800">
            {description}
          </p>
        </div>
      </div>
  );
};
