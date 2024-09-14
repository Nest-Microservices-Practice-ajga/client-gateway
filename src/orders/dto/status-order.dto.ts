import { IsEnum, IsOptional } from 'class-validator';
import { OrderStatus, OrderStatusList } from '../enum/order.enum';

export class StatusOrderDto {
  @IsOptional()
  @IsEnum(OrderStatus, {
    message: `Possible status values are ${OrderStatusList}`,
  })
  status: OrderStatus;
}
