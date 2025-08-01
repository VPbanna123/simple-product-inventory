let products =[]
let nextId=1

export function getAllProducts(req,res){
    const {q,page,limit}=req.query;
    let result=[...products];

    if(q){
        result=result.filter(p =>
        p.name.toLowerCase().includes(q.toLowerCase())
        );
    }

    const pagenum=parseInt(page)||1;
const limitnum=parseInt(limit)||result.length;
const start=(pagenum-1)*limitnum;
const end =start+limitnum;

res.json(result.slice(start+end));
};

export function getProduct (req,res){
    const id=parseInt(req.params.id);
    const product=product.find(p=>p.id===id)
    if(!product)return res.status(404).json({error:'product not found'})
        res.json(product);
}

export function addProduct(req,res){
    const {name ,price,description}=req.body;
    if (!name || typeof price !== 'number') {
    return res.status(400).json({ error: 'Invalid product data' });
  }

  const newProduct = {
    id: nextId++,
    name,
    price,
    description: description || ''
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
}
export function updateProduct(req, res) {
  const id = parseInt(req.params.id);
  const index = products.findIndex(p => p.id === id);
  if (index === -1) return res.status(404).json({ error: 'Product not found' });

  const { name, price, description } = req.body;

  if (!name || typeof price !== 'number') {
    return res.status(400).json({ error: 'Invalid product data' });
  }

  products[index] = { id, name, price, description: description || '' };
  res.json(products[index]);
}

export function deleteProduct(req, res) {
  const id = parseInt(req.params.id);
  const index = products.findIndex(p => p.id === id);
  if (index === -1) return res.status(404).json({ error: 'Product not found' });

  const deleted = products.splice(index, 1);
  res.json({ message: 'Product deleted', product: deleted[0] });
}