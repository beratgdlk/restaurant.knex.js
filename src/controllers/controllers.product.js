import { HTTP_STATUS, ERROR_MESSAGES, SUCCESS_MESSAGES } from '../constants.js';
import Product from '../models/models.product.js';

class ProductController {
  async getAll(req, res) {
    try {
      const { showDeleted, category } = req.query;
      let showDeletedValue = false;
      let onlyDeleted = false;

      if (showDeleted === 'true') {
        showDeletedValue = true;
      } else if (showDeleted === 'onlyDeleted') {
        onlyDeleted = true;
      }

      const products = await Product.getAll(showDeletedValue, onlyDeleted, category);
      res.status(HTTP_STATUS.OK).json(products);
    } catch (error) {
      console.error('Error in getAll products:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
        error: ERROR_MESSAGES.INTERNAL_ERROR
      });
    }
  }

  async getDeleted(req, res) {
    try {
      const products = await Product.getDeleted();
      res.status(HTTP_STATUS.OK).json(products);
    } catch (error) {
      console.error('Error in getDeleted products:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
        error: ERROR_MESSAGES.INTERNAL_ERROR
      });
    }
  }

  async getById(req, res) {
    try {
      const { id } = req.params;
      const product = await Product.getById(id);
      
      if (!product) {
        return res.status(HTTP_STATUS.NOT_FOUND).json({
          error: ERROR_MESSAGES.PRODUCT_NOT_FOUND
        });
      }

      res.status(HTTP_STATUS.OK).json(product);
    } catch (error) {
      console.error('Error in getById product:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
        error: ERROR_MESSAGES.INTERNAL_ERROR
      });
    }
  }

  async getByCategory(req, res) {
    try {
      const { categoryId } = req.params;
      const { showDeleted } = req.query;
      let showDeletedValue = false;
      let onlyDeleted = false;

      if (showDeleted === 'true') {
        showDeletedValue = true;
      } else if (showDeleted === 'onlyDeleted') {
        onlyDeleted = true;
      }

      const products = await Product.getAll(showDeletedValue, onlyDeleted, categoryId);
      res.status(HTTP_STATUS.OK).json(products);
    } catch (error) {
      console.error('Error in getByCategory products:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
        error: ERROR_MESSAGES.INTERNAL_ERROR
      });
    }
  }

  async create(req, res) {
    try {
      const product = await Product.create(req.body);
      res.status(HTTP_STATUS.CREATED).json({
        message: SUCCESS_MESSAGES.PRODUCT_CREATED,
        product
      });
    } catch (error) {
      console.error('Error in create product:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
        error: ERROR_MESSAGES.INTERNAL_ERROR
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const product = await Product.update(id, req.body);

      if (!product) {
        return res.status(HTTP_STATUS.NOT_FOUND).json({
          error: ERROR_MESSAGES.PRODUCT_NOT_FOUND
        });
      }

      res.status(HTTP_STATUS.OK).json({
        message: SUCCESS_MESSAGES.PRODUCT_UPDATED,
        product
      });
    } catch (error) {
      console.error('Error in update product:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
        error: ERROR_MESSAGES.INTERNAL_ERROR
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const result = await Product.softDelete(id);

      if (!result) {
        return res.status(HTTP_STATUS.NOT_FOUND).json({
          error: ERROR_MESSAGES.PRODUCT_NOT_FOUND
        });
      }

      res.status(HTTP_STATUS.OK).json({
        message: SUCCESS_MESSAGES.PRODUCT_DELETED
      });
    } catch (error) {
      console.error('Error in delete product:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
        error: ERROR_MESSAGES.INTERNAL_ERROR
      });
    }
  }

  async restore(req, res) {
    try {
      const { id } = req.params;
      const result = await Product.restore(id);

      if (!result) {
        return res.status(HTTP_STATUS.NOT_FOUND).json({
          error: ERROR_MESSAGES.PRODUCT_NOT_FOUND
        });
      }

      res.status(HTTP_STATUS.OK).json({
        message: SUCCESS_MESSAGES.PRODUCT_RESTORED,
        product: result
      });
    } catch (error) {
      console.error('Error in restore product:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
        error: ERROR_MESSAGES.INTERNAL_ERROR
      });
    }
  }

  async hardDelete(req, res) {
    try {
      const { id } = req.params;
      const result = await Product.hardDelete(id);

      if (!result) {
        return res.status(HTTP_STATUS.NOT_FOUND).json({
          error: ERROR_MESSAGES.PRODUCT_NOT_FOUND
        });
      }

      res.status(HTTP_STATUS.OK).json({
        message: SUCCESS_MESSAGES.PRODUCT_HARD_DELETED
      });
    } catch (error) {
      console.error('Error in hard delete product:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
        error: ERROR_MESSAGES.INTERNAL_ERROR
      });
    }
  }
}

export default new ProductController(); 