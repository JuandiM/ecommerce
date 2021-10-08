<h1>ONE-D SHOP</h1>
<h2> Description</h2>
<p>This is an e-commerce app as part of my final project for the Full Stack Developer Ironhack's Bootcamp. This app has been developed with MERN and React Redux, and the all the styling with React Bootstrap.
The idea of the project was to create a product as close as possible to a real product that can be developed in a company.
<h2>User Stories</h2>
<ul>
<li><strong>Signup:</strong> As an anon I can sign up in the app so that I can start writing reviews, saving products on my cart and buy products</li>
<li><strong>Login:</strong> As a user I can login to the app so that I can use all the user functionality</li>
<li><strong>Add to cart:</strong> As a user I can add any product to my cart, selecting the quantity of the products</li>
<li><strong>Search Products:</strong> As a user I want to search products by name</li>
<li><strong>Order:</strong> As a user I can buy products on the app</li>
<li><strong>Place Order Steps:</strong> As a user I want to see all the steps that must be completed to purchase a product</li>
<li><strong>Profile:</strong> As a user I can edit my profile and see all my orders in the my profile section</li>
<li><strong>Review:</strong> As a user I can write a review for each product, but only one review per product</li>
<li><strong>Rating:</strong> As a user I want to the rating and number of reviews of any products
<li><strong>Live Chat:</strong> As a user I want to contact to the admins to solve any issue</li>
</ul>
<h2>Admin</h2>
<ul>
<li><strong>Login:</strong> As an admin I can login to the platform that I can have access to all the admin functionality</li>
<li><strong>Admin view:</strong> As an admin I can see a private section that only can be accessed by admins</li>
<li><strong>Users:</strong> As admin I can access to a list of users, edit or delete them and even mark them as admins</li>
<li><strong>Products:</strong> As admin I have access to the product list</li>
<li><strong>Create/Edit/Delete Product:</strong> As admin I have control to all the products, I can edit, delete or create new products and the set the Count in Stock that will be displayed as product Quantity in any order</li>
<li><strong>Orders:</strong> As admin I have access to historic list of orders</li>
<li><strong>Delivered:</strong> As admin I can mark any order as delivered once the user has completed the purchase process</li>
</ul>
<h2>Backlog</h2>
<li><strong>Users:</strong> buy, search, add to cart and write reviews for products</li>
<li><strong>Admin:</strong> have full control to the edit/create/delete users, orders and products</li>
<h2>Frontend</h2>
<h3>Routes & Pages</h3>
<li>/order/:id - OrderView</li>
<li>/placeorder - PlaceOrderView</li>
<li>/shipping - ShippingView</li>
<li>/payment - PaymentView</li>
<li>/profile - ProfileView</li>
<li>/register - RegisterView</li>
<li>/login - LoginView</li>
<li>/product/:id - EachProductView</li>
<li>/cart/:id? - CartView</li>
<li>/page/:pageNumber - HomeView pages</li>
<li>/aboutme - AboutMeView</li>
<li>'/'  - HomeView</li>
<h4>Admins only</h4>
<li>/admin/userlist - UserListView</li>
<li>/admin/user/:id/edit - UserEditView</li>
<li>/admin/productlist - ProductListView</li>
<li>/admin/productlist/:pageNumber - ProductListView</li>
<li>/admin/orderlist - OrderListView</li>
<li>/admin/product/:id/edit - ProductEditView</li>
<h3>Components</h3>
<li>Checkout Steps</li>
<li>Footer</li>
<li>Form Container</li>
<li>Headerr</li>
<li>Loader</li>
<li>Message</li>
<li>Meta</li>
<li>Product</li>
<li>Product Carousel</li>
<li>Rating</li>
<li>Search Box</li>
<h2>Backend</h2>
<h3>Models</h3>
<h4>User model</h4>
<pre>
<code>
username - String // required
email - String // required & unique
password - String // required
isAdmin - Boolean
</code>
</pre>
<h4>Product mode</h4>
<pre>
<code>
user - [ObjectId<User>] // required
name - String
image - String
brand - String
category - String
description - String
reviews - [reviewsSchema][ObjectId<reviews><user>]
rating - String
numReviews: Number
price: Number
countInStock: Number
</code>
</pre>
<h4>Order Model</h4>
<pre>
<code>
orderItems - String {(name, qty, image, price, product[objectId<product>]} // required
shippingAddress - String {(address, city postalCode, country)} // required
paymentMethod - String //required
paymentResult - String {(id, status, update_time, email_address)}
taxPrice - Number
shippingPrice - Number
totalPrice - Number
isPaid - Boolean
paidAt - Date
isDelivered - Boolean
deliveredAt - Date
</code>
</pre>
<h3>Endpoints/Backend Routes</h3>
<h4>Users</h4>
<pre>
<code>
router.post('/login', authUser)

//get user profile
router.route('/profile')
.get(protect, getUserProfile)
.put(protect, updateUserProfile)

//new user / admin get user /admin delete user
router.route('/')
.post(registerUser)
.get(protect, admin, getUsers)

router.route('/:id')
.delete(protect, admin, deleteUser)
.get(protect, admin, getUserById)
.put(protect, admin, updateUser)
</code>
</pre>

<h4>Products</h4>
<pre>
<code>

router.route('/')
.get(getProducts)
.post(protect, admin, createProduct)

router.route('/:id/reviews').post(protect, createProductReview)

router.get('/top', getTopProduct)

router.route('/:id')
.get(getProductById)
.delete(protect, admin, deleteProduct)
.put(protect, admin, updateProduct)
</code>
</pre>

<h4>Orders</h4>
<pre>
<code>
router.route('/')
.post(protect, addOrderItems)
.get(protect, admin, getOrders)

router.route('/myorders').get(protect, getMyOrders)

router.route('/:id').get(protect, getOrderById)

router.route('/:id/pay').put(protect, updateOrderToPaid)
router.route('/:id/deliver').put(protect, admin, updateOrderToDelivered)
</code>
</pre>

<h2>Link</h2>
<h3>Deploy Link</h3>
<a href='https://one-d-shop.herokuapp.com/' alt='one-d-shop'>https://one-d-shop.herokuapp.com<a/>
<h3>Linkedin</h3>
<a href='https://www.linkedin.com/in/juandi-mena/' alt='JuandiM-linkedin'>JuandiM Linkedin<a/>


           
           
