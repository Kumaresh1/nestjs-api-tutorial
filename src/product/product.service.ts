import {
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProductDto } from './dto';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  getProducts() {
    return this.prisma.products.findMany();
  }

  getProductById(id: string) {
    return this.prisma.products.findFirst({
      where: {
        id,
      },
    });
  }

  async createProduct(dto: CreateProductDto) {
    try {
      const product =
        await this.prisma.products.create({
          data: {
            ...dto,
          },
        });
      return product;
    } catch (error) {
      console.log(error);
      throw new ForbiddenException(error);
    }
  }

  async bulkAddProducts(dto: CreateProductDto[]) {
    try {
      const product =
        await this.prisma.products.createMany({
          data: dto,
        });
      return product;
    } catch (error) {
      console.log(error);
      throw new ForbiddenException(error);
    }
  }

  async editProductById(
    productId: string,
    dto: CreateProductDto,
  ) {
    // get the product by id
    const product =
      await this.prisma.products.findUnique({
        where: {
          id: productId,
        },
      });

    // check if user owns the product
    if (!product)
      throw new ForbiddenException(
        'Access to resources denied',
      );

    return this.prisma.products.update({
      where: {
        id: productId,
      },
      data: {
        ...dto,
      },
    });
  }

  async deleteProductById(productId: string) {
    const product =
      await this.prisma.products.findUnique({
        where: {
          id: productId,
        },
      });

    // check if user owns the product
    if (!product)
      throw new ForbiddenException(
        'Access to resources denied',
      );

    await this.prisma.products.delete({
      where: {
        id: productId,
      },
    });
  }

  async deleteProductInBulk(
    productIds: string[],
  ) {
    console.log('hereeee');
    const products =
      await this.prisma.products.findMany({
        where: {
          id: { in: productIds },
        },
      });

    // check if user owns the product
    if (products.length !== productIds.length)
      throw new ForbiddenException(
        'Access to resources denied',
      );

    return await this.prisma.products.deleteMany({
      where: {
        id: { in: productIds },
      },
    });
  }
}
