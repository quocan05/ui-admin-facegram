import { Card, Divider, Flex, Typography } from 'antd';
import Meta from 'antd/es/card/Meta';
import { ETitleCard } from 'src/variables/enum-variables';
import './CardDisplay.scss';

type Prop = {
  title?: ETitleCard;
  description?: string;
  amount?: number;
};

export interface IDataCard {}

const CardDisplay = (props: Prop) => {
  const { title, description, amount } = props;
  return (
    <>
      <Card
        style={{
          width: 320,
          background:
            title === ETitleCard.USER
              ? '#17A2B8'
              : title === ETitleCard.POST
              ? '#27A143'
              : title === ETitleCard.REACT
              ? '#FEC007'
              : '#DC3545',
          border: '1px solid #000',
        }}
        hoverable
      >
        <Flex align="center">
          <Meta
            title={
              <>
                <Typography.Title level={4}>{title}</Typography.Title>
                <Divider />
              </>
            }
            description={
              <Flex align="center" gap={8}>
                <Typography.Title level={2}>{amount}</Typography.Title>
                <Typography.Title type="secondary" level={4}>
                  was created
                </Typography.Title>
              </Flex>
            }
          />
        </Flex>
      </Card>
    </>
  );
};

export default CardDisplay;
