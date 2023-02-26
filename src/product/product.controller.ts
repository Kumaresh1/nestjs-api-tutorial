import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { GetUser } from '../auth/decorator';
import { JwtGuard } from '../auth/guard';
import { CreateProductDto } from './dto';

import { ProductService } from './product.service';

// @UseGuards(JwtGuard)
@Controller('products')
export class ProductController {
  constructor(
    private productService: ProductService,
  ) {}

  @Get()
  getProducts() {
    return this.productService.getProducts();
  }

  @Get(':id')
  getProductById(
    @GetUser('id') productId: string,
  ) {
    return this.productService.getProductById(
      productId,
    );
  }

  @Post()
  createProduct(
    // @GetUser('id') userId: string,
    @Body() dto: CreateProductDto,
  ) {
    return this.productService.createProduct(dto);
  }

  @Post('/bulk-add')
  bulkAddProducts(
    @Body() dto: CreateProductDto[],
  ) {
    return this.productService.bulkAddProducts(
      dto,
    );
  }

  @Patch(':id')
  editProductById(
    @Param('id') id: string,
    @Body() dto: CreateProductDto,
  ) {
    return this.productService.editProductById(
      id,
      dto,
    );
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  deleteProductById(@Param('id') id: string) {
    return this.productService.deleteProductById(
      id,
    );
  }

  @Post('/bulk-delete')
  bulkDeleteProducts(
    @Body('data') data: string[],
  ) {
    console.log('(*U(**&TY*&');
    return this.productService.deleteProductInBulk(
      data,
    );
  }
}
