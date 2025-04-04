import { HTTP_STATUS, ERROR_MESSAGES, SUCCESS_MESSAGES } from '../constants.js';
import Category from '../models/models.category.js';

class CategoryController {
  async getAll(req, res) {
    try {
      const categories = await Category.getAll();
      res.status(HTTP_STATUS.OK).json(categories);
    } catch (error) {
      console.error('Error in getAll categories:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
        error: ERROR_MESSAGES.INTERNAL_ERROR
      });
    }
  }

  async getById(req, res) {
    try {
      const { id } = req.params;
      const category = await Category.getById(id);
      
      if (!category) {
        return res.status(HTTP_STATUS.NOT_FOUND).json({
          error: ERROR_MESSAGES.CATEGORY_NOT_FOUND
        });
      }

      res.status(HTTP_STATUS.OK).json(category);
    } catch (error) {
      console.error('Error in getById category:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
        error: ERROR_MESSAGES.INTERNAL_ERROR
      });
    }
  }

  async create(req, res) {
    try {
      const category = await Category.create(req.body);
      res.status(HTTP_STATUS.CREATED).json({
        message: SUCCESS_MESSAGES.CATEGORY_CREATED,
        category
      });
    } catch (error) {
      console.error('Error in create category:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
        error: ERROR_MESSAGES.INTERNAL_ERROR
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const category = await Category.update(id, req.body);

      if (!category) {
        return res.status(HTTP_STATUS.NOT_FOUND).json({
          error: ERROR_MESSAGES.CATEGORY_NOT_FOUND
        });
      }

      res.status(HTTP_STATUS.OK).json({
        message: SUCCESS_MESSAGES.CATEGORY_UPDATED,
        category
      });
    } catch (error) {
      console.error('Error in update category:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
        error: ERROR_MESSAGES.INTERNAL_ERROR
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const result = await Category.delete(id);

      if (!result) {
        return res.status(HTTP_STATUS.NOT_FOUND).json({
          error: ERROR_MESSAGES.CATEGORY_NOT_FOUND
        });
      }

      res.status(HTTP_STATUS.OK).json({
        message: SUCCESS_MESSAGES.CATEGORY_DELETED
      });
    } catch (error) {
      console.error('Error in delete category:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
        error: ERROR_MESSAGES.INTERNAL_ERROR
      });
    }
  }
}

export default new CategoryController(); 