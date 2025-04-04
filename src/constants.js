export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500
};

export const ERROR_MESSAGES = {
  INTERNAL_ERROR: 'Bir iç sunucu hatası oluştu',
  CATEGORY_NOT_FOUND: 'Kategori bulunamadı',
  PRODUCT_NOT_FOUND: 'Ürün bulunamadı',
  INGREDIENT_NOT_FOUND: 'Malzeme bulunamadı',
  INVALID_CREDENTIALS: 'Geçersiz kimlik bilgileri',
  UNAUTHORIZED: 'Bu işlem için yetkiniz yok',
  VALIDATION_ERROR: 'Doğrulama hatası'
};

export const SUCCESS_MESSAGES = {
  CATEGORY_CREATED: 'Kategori başarıyla oluşturuldu',
  CATEGORY_UPDATED: 'Kategori başarıyla güncellendi',
  CATEGORY_DELETED: 'Kategori başarıyla silindi',
  CATEGORY_RESTORED: 'Kategori başarıyla geri getirildi',
  CATEGORY_HARD_DELETED: 'Kategori kalıcı olarak silindi',
  
  PRODUCT_CREATED: 'Ürün başarıyla oluşturuldu',
  PRODUCT_UPDATED: 'Ürün başarıyla güncellendi',
  PRODUCT_DELETED: 'Ürün başarıyla silindi',
  PRODUCT_RESTORED: 'Ürün başarıyla geri getirildi',
  PRODUCT_HARD_DELETED: 'Ürün kalıcı olarak silindi',
  
  INGREDIENT_CREATED: 'Malzeme başarıyla oluşturuldu',
  INGREDIENT_UPDATED: 'Malzeme başarıyla güncellendi',
  INGREDIENT_DELETED: 'Malzeme başarıyla silindi',
  INGREDIENT_RESTORED: 'Malzeme başarıyla geri getirildi',
  INGREDIENT_HARD_DELETED: 'Malzeme kalıcı olarak silindi'
}; 