import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}
  @Get()
  findAll(): Promise<Item[]> {
    return this.itemsService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id): Promise<Item> {
    return this.itemsService.findOne(id);
  }
  @Post()
  create(@Body() createItemDto: CreateItemDto): Promise<Item> {
    // const item =
    return this.itemsService.create(createItemDto);
  }
  @Delete(':id')
  delete(@Param('id') id): Promise<Item> {
    return this.itemsService.delete(id);
  }
  @Put(':id')
  update(@Param('id') id, @Body() createItemDto: CreateItemDto): Promise<Item> {
    return this.itemsService.update(id, createItemDto);
  }
}
