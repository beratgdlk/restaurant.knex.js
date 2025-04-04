import { HTTP_STATUS, ERROR_MESSAGES, SUCCESS_MESSAGES } from '../constants.js';
import Ingredient from '../models/models.ingredient.js';

class IngredientController {
  async getAll(req, res) {
    try {
      const ingredients = await Ingredient.getAll();
      res.status(HTTP_STATUS.OK).json(ingredients);
    } catch (error) {
      console.error('Error in getAll ingredients:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
        error: ERROR_MESSAGES.INTERNAL_ERROR
      });
    }
  }

  async getDeleted(req, res) {
    try {
      const ingredients = await Ingredient.getDeleted();
      res.status(HTTP_STATUS.OK).json(ingredients);
    } catch (error) {
      console.error('Error in getDeleted ingredients:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
        error: ERROR_MESSAGES.INTERNAL_ERROR
      });
    }
  }

  async getById(req, res) {
    try {
      const { id } = req.params;
      const ingredient = await Ingredient.getById(id);
      
      if (!ingredient) {
        return res.status(HTTP_STATUS.NOT_FOUND).json({
          error: ERROR_MESSAGES.INGREDIENT_NOT_FOUND
        });
      }

      res.status(HTTP_STATUS.OK).json(ingredient);
    } catch (error) {
      console.error('Error in getById ingredient:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
        error: ERROR_MESSAGES.INTERNAL_ERROR
      });
    }
  }

  async getByProduct(req, res) {
    try {
      const { productId } = req.params;
      const ingredients = await Ingredient.getByProduct(productId);
      res.status(HTTP_STATUS.OK).json(ingredients);
    } catch (error) {
      console.error('Error in getByProduct ingredients:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
        error: ERROR_MESSAGES.INTERNAL_ERROR
      });
    }
  }

  async create(req, res) {
    try {
      const ingredient = await Ingredient.create(req.body);
      res.status(HTTP_STATUS.CREATED).json({
        message: SUCCESS_MESSAGES.INGREDIENT_CREATED,
        ingredient
      });
    } catch (error) {
      console.error('Error in create ingredient:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
        error: ERROR_MESSAGES.INTERNAL_ERROR
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const ingredient = await Ingredient.update(id, req.body);

      if (!ingredient) {
        return res.status(HTTP_STATUS.NOT_FOUND).json({
          error: ERROR_MESSAGES.INGREDIENT_NOT_FOUND
        });
      }

      res.status(HTTP_STATUS.OK).json({
        message: SUCCESS_MESSAGES.INGREDIENT_UPDATED,
        ingredient
      });
    } catch (error) {
      console.error('Error in update ingredient:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
        error: ERROR_MESSAGES.INTERNAL_ERROR
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const result = await Ingredient.softDelete(id);

      if (!result) {
        return res.status(HTTP_STATUS.NOT_FOUND).json({
          error: ERROR_MESSAGES.INGREDIENT_NOT_FOUND
        });
      }

      res.status(HTTP_STATUS.OK).json({
        message: SUCCESS_MESSAGES.INGREDIENT_DELETED
      });
    } catch (error) {
      console.error('Error in delete ingredient:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
        error: ERROR_MESSAGES.INTERNAL_ERROR
      });
    }
  }

  async restore(req, res) {
    try {
      const { id } = req.params;
      const result = await Ingredient.restore(id);

      if (!result) {
        return res.status(HTTP_STATUS.NOT_FOUND).json({
          error: ERROR_MESSAGES.INGREDIENT_NOT_FOUND
        });
      }

      res.status(HTTP_STATUS.OK).json({
        message: SUCCESS_MESSAGES.INGREDIENT_RESTORED,
        ingredient: result
      });
    } catch (error) {
      console.error('Error in restore ingredient:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
        error: ERROR_MESSAGES.INTERNAL_ERROR
      });
    }
  }

  async hardDelete(req, res) {
    try {
      const { id } = req.params;
      const result = await Ingredient.hardDelete(id);

      if (!result) {
        return res.status(HTTP_STATUS.NOT_FOUND).json({
          error: ERROR_MESSAGES.INGREDIENT_NOT_FOUND
        });
      }

      res.status(HTTP_STATUS.OK).json({
        message: SUCCESS_MESSAGES.INGREDIENT_HARD_DELETED
      });
    } catch (error) {
      console.error('Error in hard delete ingredient:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
        error: ERROR_MESSAGES.INTERNAL_ERROR
      });
    }
  }
}

export default new IngredientController(); 