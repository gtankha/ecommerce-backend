// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

Product.belongsTo(Category,{
  foreignKey: 'category_id'
});

Category.hasMany(Product,{
  foreignKey: 'category_id'
});


Product.belongsToMany(Tag,{
through: ProductTag,
as: 'product_tags',
foreignKey: 'product_id'

});

Tag.belongsToMany(Product,{
  through: ProductTag,
  as: 'product_tags',
  foreignKey: 'tag_id'
});


// Categories have many Products

// Products belongToMany Tags (through ProductTag)

// Tags belongToMany Products (through ProductTag)

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
