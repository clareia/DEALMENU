// ==================== ENHANCED MOCK DATABASE ====================
class EnhancedDatabase {
    constructor() {
        this.usersKey = 'dealme_nu_users';
        this.currentUserKey = 'dealme_nu_current_user';
        this.itemsKey = 'dealme_nu_items';
        this.wishlistKey = 'dealme_nu_wishlist';
        this.chatsKey = 'dealme_nu_chats';
        this.notificationsKey = 'dealme_nu_notifications';
        this.tradesKey = 'dealme_nu_trades';
        this.tradeItemsKey = 'dealme_nu_trade_items';
        this.sentOffersKey = 'dealme_nu_sent_offers';
        this.categoriesKey = 'dealme_nu_categories';
        this.initAllData();
    }

    initAllData() {
        this.initUsers();
        this.initItems();
        this.initCategories();
        this.initNotifications();
        this.initTrades();
        this.initTradeItems();
        this.initSentOffers();
    }

    initUsers() {
        if (!localStorage.getItem(this.usersKey)) {
            const defaultUsers = [
                {
                    id: 1,
                    username: 'demo_student',
                    email: 'demo@students.nu-fairview.edu.ph',
                    password: 'password123',
                    google_email: 'demo@students.nu-fairview.edu.ph',
                    student_id: '2023-00123',
                    full_name: 'Juan Dela Cruz',
                    course: 'BS Information Technology',
                    year_level: '3',
                    contact_number: '09123456789',
                    status: 'approved',
                    role: 'user',
                    items_sold: 12,
                    items_bought: 8,
                    seller_rating: 4.8,
                    rating_count: 25,
                    created_at: new Date().toISOString()
                },
                {
                    id: 2,
                    username: 'admin_nu',
                    email: 'admin@nu-fairview.edu.ph',
                    password: 'admin123',
                    google_email: 'admin@nu-fairview.edu.ph',
                    student_id: 'ADMIN-001',
                    full_name: 'NU Administrator',
                    course: 'Administration',
                    year_level: '5',
                    contact_number: '09123456789',
                    status: 'approved',
                    role: 'admin',
                    items_sold: 0,
                    items_bought: 0,
                    seller_rating: 5.0,
                    rating_count: 0,
                    created_at: new Date().toISOString()
                }
            ];
            localStorage.setItem(this.usersKey, JSON.stringify(defaultUsers));
        }
    }

    initCategories() {
        if (!localStorage.getItem(this.categoriesKey)) {
            const categories = {
                'supplies': [
                    'SHS Supplies',
                    'IT/Computer Supplies',
                    'Engineering Supplies',
                    'Business/Accountancy Supplies',
                    'Psychology Supplies',
                    'Tourism/Hospitality Supplies',
                    'Medical/Health Sciences Supplies',
                    'Arts & Design Supplies'
                ],
                'gadgets': [
                    'Laptops & Computers',
                    'Phones & Tablets',
                    'Calculators',
                    'Headphones & Audio',
                    'Accessories'
                ],
                'uniforms': [
                    'Traditional Uniform',
                    'Psychology Uniform',
                    'Tourism Uniform',
                    'Hospitality Management Uniform',
                    'PE Uniform',
                    'Lab Gowns/Coats'
                ],
                'books': [
                    'General Education Books',
                    'Program-specific Textbooks',
                    'Reference Books',
                    'Review Materials'
                ],
                'food': [
                    'Snacks',
                    'Home-cooked Meals',
                    'Beverages',
                    'Baked Goods'
                ],
                'dorm': [
                    'Furniture',
                    'Bedding',
                    'Kitchenware',
                    'Storage Solutions'
                ],
                'appliances': [
                    'Small Appliances',
                    'Fans/Coolers',
                    'Mini-fridge',
                    'Water Heaters'
                ],
                'graduation': [
                    'Toga & Hood',
                    'Yearbooks',
                    'Graduation Photos',
                    'Souvenirs'
                ],
                'sports': [
                    'Sports Equipment',
                    'Gym Accessories',
                    'Activewear'
                ],
                'hobbies': [
                    'Art Supplies',
                    'Musical Instruments',
                    'Craft Materials'
                ],
                'others': [
                    'Miscellaneous'
                ]
            };
            localStorage.setItem(this.categoriesKey, JSON.stringify(categories));
        }
    }

    initItems() {
        if (!localStorage.getItem(this.itemsKey)) {
            const defaultItems = [
                {
                    id: 1,
                    title: "Calculus Textbook 3rd Edition",
                    price: 500,
                    images: [
                        "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=300&fit=crop"
                    ],
                    status: "sold",
                    buyer_id: 1,
                    category: "books",
                    subcategory: "General Education Books",
                    seller_id: 1,
                    seller_name: "Juan Dela Cruz",
                    location: "NU Fairview Main Building",
                    description: "Like new condition, minimal highlights. Meetup at NU Fairview only.",
                    programs: ["BS Information Technology", "BS Civil Engineering", "SHS"],
                    created_at: new Date().toISOString(),
                    views: 156,
                    wishlist_count: 12
                },
                {
                    id: 2,
                    title: "Graphing Calculator TI-84 Plus",
                    price: 1500,
                    images: [
                        "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?w=400&h=300&fit=crop"
                    ],
                    status: "available",
                    category: "gadgets",
                    subcategory: "Calculators",
                    seller_id: 1,
                    seller_name: "Juan Dela Cruz",
                    location: "NU Fairview Engineering Building",
                    description: "Used for 1 semester only. With case and batteries included.",
                    programs: ["BS Civil Engineering", "BS Information Technology"],
                    created_at: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
                    views: 89,
                    wishlist_count: 8
                },
                {
                    id: 3,
                    title: "Psychology Uniform Set",
                    price: 800,
                    images: [
                        "https://images.unsplash.com/photo-1558769132-cb1cb458d79e?w=400&h=300&fit=crop"
                    ],
                    status: "available",
                    category: "uniforms",
                    subcategory: "Psychology Uniform",
                    seller_id: 1,
                    seller_name: "Juan Dela Cruz",
                    location: "NU Fairview Psychology Building",
                    description: "Complete set, size Medium. Barely used.",
                    programs: ["BS Psychology"],
                    created_at: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
                    views: 45,
                    wishlist_count: 5
                },
                {
                    id: 4,
                    title: "Macbook Air 2020",
                    price: 25000,
                    images: [
                        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop"
                    ],
                    status: "available",
                    category: "gadgets",
                    subcategory: "Laptops & Computers",
                    seller_id: 1,
                    seller_name: "Juan Dela Cruz",
                    location: "NU Fairview Library",
                    description: "256GB, good condition. Perfect for programming students.",
                    programs: ["BS Information Technology", "BS Computer Science"],
                    created_at: new Date().toISOString(),
                    views: 210,
                    wishlist_count: 25
                }
            ];
            localStorage.setItem(this.itemsKey, JSON.stringify(defaultItems));
        }
    }

    initNotifications() {
        if (!localStorage.getItem(this.notificationsKey)) {
            const notifications = [
                {
                    id: 1,
                    user_id: 1,
                    type: 'welcome',
                    title: 'Welcome to Deal Me NU!',
                    message: 'Start buying and selling with fellow NU Fairview students.',
                    read: false,
                    created_at: new Date().toISOString()
                },
                {
                    id: 2,
                    user_id: 1,
                    type: 'item_viewed',
                    title: 'Your item got viewed!',
                    message: 'Your "Calculus Textbook" has been viewed 10 times today.',
                    read: false,
                    created_at: new Date().toISOString()
                }
            ];
            localStorage.setItem(this.notificationsKey, JSON.stringify(notifications));
        }
    }

    initTrades() {
        if (!localStorage.getItem(this.tradesKey)) {
            const demoTrades = [
                {
                    id: 1,
                    item_id: 2,
                    item_title: 'Graphing Calculator TI-84 Plus',
                    offered_by: 2,
                    offered_by_name: 'NU Administrator',
                    offered_items: ['USB flash drive', 'Notebook'],
                    status: 'pending', // pending | accepted | declined | completed
                    messages: [
                        { from: 2, text: 'Hi, I can trade a USB flash drive for your calculator.', at: new Date().toISOString() }
                    ],
                    created_at: new Date().toISOString()
                }
            ];
            localStorage.setItem(this.tradesKey, JSON.stringify(demoTrades));
        }
    }

    getTrades() {
        return JSON.parse(localStorage.getItem(this.tradesKey)) || [];
    }

    saveTrades(trades) {
        localStorage.setItem(this.tradesKey, JSON.stringify(trades));
    }

    addTrade(trade) {
        const trades = this.getTrades();
        trade.id = trades.length ? trades[trades.length - 1].id + 1 : 1;
        trades.push(trade);
        this.saveTrades(trades);
        return trade;
    }

    updateTradeStatus(tradeId, updates) {
        const trades = this.getTrades();
        const idx = trades.findIndex(t => t.id === tradeId);
        if (idx === -1) return null;
        trades[idx] = { ...trades[idx], ...updates };
        this.saveTrades(trades);
        return trades[idx];
    }

    initTradeItems() {
        if (!localStorage.getItem(this.tradeItemsKey)) {
            const tradeItems = [
                {
                    id: 1,
                    seller_id: 1,
                    seller_name: 'Juan Dela Cruz',
                    title: 'Macbook Pro 2019',
                    description: 'Still works perfectly, minor scratches on the frame',
                    condition: 'Good',
                    cash_with_trade: 0,
                    looking_for: 'Gaming laptop or iPad Pro',
                    created_at: new Date().toISOString()
                }
            ];
            localStorage.setItem(this.tradeItemsKey, JSON.stringify(tradeItems));
        }
    }

    getTradeItems() {
        return JSON.parse(localStorage.getItem(this.tradeItemsKey)) || [];
    }

    saveTradeItems(items) {
        localStorage.setItem(this.tradeItemsKey, JSON.stringify(items));
    }

    addTradeItem(item) {
        const items = this.getTradeItems();
        item.id = items.length ? items[items.length - 1].id + 1 : 1;
        items.push(item);
        this.saveTradeItems(items);
        return item;
    }

    initSentOffers() {
        if (!localStorage.getItem(this.sentOffersKey)) {
            localStorage.setItem(this.sentOffersKey, JSON.stringify([]));
        }
    }

    getSentOffers() {
        return JSON.parse(localStorage.getItem(this.sentOffersKey)) || [];
    }

    saveSentOffers(offers) {
        localStorage.setItem(this.sentOffersKey, JSON.stringify(offers));
    }

    addSentOffer(offer) {
        const offers = this.getSentOffers();
        offer.id = offers.length ? offers[offers.length - 1].id + 1 : 1;
        offers.push(offer);
        this.saveSentOffers(offers);
        return offer;
    }

    // ==================== USER METHODS ====================
    getUsers() {
        return JSON.parse(localStorage.getItem(this.usersKey)) || [];
    }

    saveUsers(users) {
        localStorage.setItem(this.usersKey, JSON.stringify(users));
    }

    addUser(userData) {
        const users = this.getUsers();
        const newUser = {
            id: users.length + 1,
            ...userData,
            status: 'pending',
            role: 'user',
            items_sold: 0,
            items_bought: 0,
            seller_rating: 0,
            rating_count: 0,
            created_at: new Date().toISOString()
        };
        users.push(newUser);
        this.saveUsers(users);
        return newUser;
    }

    findUserByUsernameOrEmail(identifier) {
        const users = this.getUsers();
        return users.find(user => 
            user.username === identifier || 
            user.email === identifier ||
            user.google_email === identifier
        );
    }

    validateLogin(username, password) {
        const user = this.findUserByUsernameOrEmail(username);
        if (user && user.password === password && user.status === 'approved') {
            return user;
        }
        return null;
    }

approveUser(userId) {
    if (this.db.approveUser(userId)) {
        this.showNotification(`User #${userId} approved successfully`, 'success');
        document.getElementById(`user-${userId}`).remove();
        
        // Get fresh stats
        const stats = this.db.getStats();
        const rejectedUsers = this.db.getRejectedUsers();
        const pendingUsers = this.db.getPendingUsers();
        
        // Update ALL stats immediately
        this.updateAllStatsNow(stats, pendingUsers.length, rejectedUsers.length);
        
        // Show empty state if no pending users
        if (pendingUsers.length === 0) {
            const pendingList = document.getElementById('pending-users-list');
            if (pendingList && pendingList.children.length === 0) {
                pendingList.innerHTML = `
                    <div class="empty-state">
                        <i class="fas fa-check-circle"></i>
                        <p>No pending registrations at the moment</p>
                    </div>
                `;
            }
        }
    } else {
        this.showNotification('Error approving user', 'error');
    }
}

    rejectUser(userId) {
    if (this.db.rejectUser(userId)) {
        this.showNotification(`User #${userId} rejected`, 'info');
        document.getElementById(`user-${userId}`).remove();
        
        // Get fresh stats
        const stats = this.db.getStats();
        const rejectedUsers = this.db.getRejectedUsers();
        const pendingUsers = this.db.getPendingUsers();
        
        // Update ALL stats immediately
        this.updateAllStatsNow(stats, pendingUsers.length, rejectedUsers.length);
        
        // Show empty state if no pending users
        if (pendingUsers.length === 0) {
            const pendingList = document.getElementById('pending-users-list');
            if (pendingList && pendingList.children.length === 0) {
                pendingList.innerHTML = `
                    <div class="empty-state">
                        <i class="fas fa-check-circle"></i>
                        <p>No pending registrations at the moment</p>
                    </div>
                `;
            }
        }
    } else {
        this.showNotification('Error rejecting user', 'error');
    }
}

updateAllStatsNow(stats, pendingCount, rejectedCount) {
    // Update all stat cards with new numbers
    document.querySelectorAll('.stat-card h3').forEach(countElement => {
        const card = countElement.parentElement;
        const cardTitle = card.querySelector('p').textContent;
        
        if (cardTitle === 'Total Users') countElement.textContent = stats.totalUsers;
        if (cardTitle === 'Pending Approvals') countElement.textContent = pendingCount;
        if (cardTitle === 'Approved Users') countElement.textContent = stats.approvedUsers;
        if (cardTitle === 'Total Items') countElement.textContent = stats.totalItems;
        if (cardTitle === 'Rejected Users') countElement.textContent = rejectedCount;
    });
    
    // Update the pending header count
    const pendingHeader = document.querySelector('.pending-users h2');
    if (pendingHeader) {
        pendingHeader.innerHTML = `
            <i class="fas fa-clock"></i> Pending Registrations (${pendingCount})
        `;
    }
}
    getPendingUsers() {
        const users = this.getUsers();
        return users.filter(user => user.status === 'pending');
    }

    updateUserRating(userId, newRating) {
        const users = this.getUsers();
        const userIndex = users.findIndex(u => u.id === userId);
        if (userIndex !== -1) {
            const user = users[userIndex];
            const totalRating = (user.seller_rating * user.rating_count) + newRating;
            user.rating_count += 1;
            user.seller_rating = totalRating / user.rating_count;
            user.items_sold += 1;
            this.saveUsers(users);
            return user.seller_rating;
        }
        return null;
    }
updateStats() {
    const stats = this.db.getStats();
    const pendingUsers = this.db.getPendingUsers();
    const rejectedUsers = this.db.getRejectedUsers();
    
    // Update all stat cards
    document.querySelectorAll('.stat-card h3').forEach(countElement => {
        const card = countElement.parentElement;
        const cardTitle = card.querySelector('p').textContent;
        
        if (cardTitle === 'Total Users') countElement.textContent = stats.totalUsers;
        if (cardTitle === 'Pending Approvals') countElement.textContent = pendingUsers.length;
        if (cardTitle === 'Approved Users') countElement.textContent = stats.approvedUsers;
        if (cardTitle === 'Total Items') countElement.textContent = stats.totalItems;
        if (cardTitle === 'Rejected Users') countElement.textContent = rejectedUsers.length;
    });
    
    // Update the pending header
    const pendingHeader = document.querySelector('.pending-users h2');
    if (pendingHeader) {
        pendingHeader.innerHTML = `
            <i class="fas fa-clock"></i> Pending Registrations (${pendingUsers.length})
        `;
    }
    
    // Show empty state if no pending users
    if (pendingUsers.length === 0) {
        const pendingList = document.getElementById('pending-users-list');
        if (pendingList && pendingList.children.length === 0) {
            pendingList.innerHTML = `
                <div class="empty-state">
                    <i class="fas fa-check-circle"></i>
                    <p>No pending registrations at the moment</p>
                </div>
            `;
        }
    }
}
    incrementItemsBought(userId) {
        const users = this.getUsers();
        const userIndex = users.findIndex(u => u.id === userId);
        if (userIndex !== -1) {
            users[userIndex].items_bought += 1;
            this.saveUsers(users);
            return true;
        }
        return false;
    }

    // ==================== ITEM METHODS ====================
    getItems() {
        return JSON.parse(localStorage.getItem(this.itemsKey)) || [];
    }

    saveItems(items) {
        localStorage.setItem(this.itemsKey, JSON.stringify(items));
    }

    addItem(itemData) {
        const items = this.getItems();
        const newItem = {
            id: items.length + 1,
            ...itemData,
            views: 0,
            wishlist_count: 0,
            created_at: new Date().toISOString()
        };
        items.push(newItem);
        this.saveItems(items);
        return newItem;
    }

    markItemAsSold(itemId, buyerId) {
        const items = this.getItems();
        const itemIndex = items.findIndex(item => item.id === itemId);
        if (itemIndex !== -1) {
            items[itemIndex].status = 'sold';
            items[itemIndex].buyer_id = buyerId;
            items[itemIndex].sold_at = new Date().toISOString();
            this.saveItems(items);
            return true;
        }
        return false;
    }

    getUserItems(userId) {
        const items = this.getItems();
        return items.filter(item => item.seller_id === userId);
    }

    getSoldItems(userId) {
        const items = this.getItems();
        return items.filter(item => item.seller_id === userId && item.status === 'sold');
    }

    // ==================== WISHLIST METHODS ====================
    getWishlist(userId) {
        const wishlist = JSON.parse(localStorage.getItem(this.wishlistKey)) || {};
        return wishlist[userId] || [];
    }

    saveWishlist(userId, itemIds) {
        const wishlist = JSON.parse(localStorage.getItem(this.wishlistKey)) || {};
        wishlist[userId] = itemIds;
        localStorage.setItem(this.wishlistKey, JSON.stringify(wishlist));
    }

    addToWishlist(userId, itemId) {
        const currentWishlist = this.getWishlist(userId);
        if (!currentWishlist.includes(itemId)) {
            currentWishlist.push(itemId);
            this.saveWishlist(userId, currentWishlist);
            
            // Update item wishlist count
            const items = this.getItems();
            const itemIndex = items.findIndex(item => item.id === itemId);
            if (itemIndex !== -1) {
                items[itemIndex].wishlist_count += 1;
                this.saveItems(items);
            }
            return true;
        }
        return false;
    }

    removeFromWishlist(userId, itemId) {
        let currentWishlist = this.getWishlist(userId);
        const index = currentWishlist.indexOf(itemId);
        if (index !== -1) {
            currentWishlist.splice(index, 1);
            this.saveWishlist(userId, currentWishlist);
            
            // Update item wishlist count
            const items = this.getItems();
            const itemIndex = items.findIndex(item => item.id === itemId);
            if (itemIndex !== -1) {
                items[itemIndex].wishlist_count = Math.max(0, items[itemIndex].wishlist_count - 1);
                this.saveItems(items);
            }
            return true;
        }
        return false;
    }

    isInWishlist(userId, itemId) {
        const wishlist = this.getWishlist(userId);
        return wishlist.includes(itemId);
    }

    // ==================== CATEGORY METHODS ====================
    getCategories() {
        return JSON.parse(localStorage.getItem(this.categoriesKey)) || {};
    }

    getCategoryOptions() {
        const categories = this.getCategories();
        const programs = [
            'SHS',
            'BS Information Technology',
            'BS Computer Science',
            'BS Civil Engineering',
            'BS Business Administration',
            'BS Accountancy',
            'BS Psychology',
            'BS Tourism Management',
            'BS Hospitality Management',
            'All Programs'
        ];
        
        return {
            categories: categories,
            programs: programs,
            mainCategories: Object.keys(categories)
        };
    }

    // ==================== NOTIFICATION METHODS ====================
    getNotifications(userId) {
        const notifications = JSON.parse(localStorage.getItem(this.notificationsKey)) || [];
        return notifications.filter(notification => notification.user_id === userId);
    }

    addNotification(notificationData) {
        const notifications = JSON.parse(localStorage.getItem(this.notificationsKey)) || [];
        const newNotification = {
            id: notifications.length + 1,
            ...notificationData,
            read: false,
            created_at: new Date().toISOString()
        };
        notifications.push(newNotification);
        localStorage.setItem(this.notificationsKey, JSON.stringify(notifications));
        return newNotification;
    }

    markNotificationAsRead(notificationId) {
        const notifications = JSON.parse(localStorage.getItem(this.notificationsKey)) || [];
        const notificationIndex = notifications.findIndex(n => n.id === notificationId);
        if (notificationIndex !== -1) {
            notifications[notificationIndex].read = true;
            localStorage.setItem(this.notificationsKey, JSON.stringify(notifications));
            return true;
        }
        return false;
    }

    markAllNotificationsAsRead(userId) {
        const notifications = JSON.parse(localStorage.getItem(this.notificationsKey)) || [];
        notifications.forEach(notification => {
            if (notification.user_id === userId) {
                notification.read = true;
            }
        });
        localStorage.setItem(this.notificationsKey, JSON.stringify(notifications));
        return true;
    }

    getUnreadNotificationCount(userId) {
        const notifications = this.getNotifications(userId);
        return notifications.filter(n => !n.read).length;
    }

    // ==================== CHAT METHODS ====================
    getChats(userId) {
        const chats = JSON.parse(localStorage.getItem(this.chatsKey)) || [];
        return chats.filter(chat => chat.user1_id === userId || chat.user2_id === userId);
    }

    createChat(user1Id, user2Id, itemId) {
        const chats = JSON.parse(localStorage.getItem(this.chatsKey)) || [];
        const existingChat = chats.find(chat => 
            (chat.user1_id === user1Id && chat.user2_id === user2Id && chat.item_id === itemId) ||
            (chat.user1_id === user2Id && chat.user2_id === user1Id && chat.item_id === itemId)
        );
        
        if (existingChat) {
            return existingChat;
        }
        
        const newChat = {
            id: chats.length + 1,
            user1_id: user1Id,
            user2_id: user2Id,
            item_id: itemId,
            messages: [],
            created_at: new Date().toISOString(),
            last_activity: new Date().toISOString()
        };
        
        chats.push(newChat);
        localStorage.setItem(this.chatsKey, JSON.stringify(chats));
        return newChat;
    }

    addMessage(chatId, senderId, message) {
        const chats = JSON.parse(localStorage.getItem(this.chatsKey)) || [];
        const chatIndex = chats.findIndex(chat => chat.id === chatId);
        
        if (chatIndex !== -1) {
            const newMessage = {
                id: chats[chatIndex].messages.length + 1,
                sender_id: senderId,
                message: message,
                timestamp: new Date().toISOString(),
                read: false
            };
            
            chats[chatIndex].messages.push(newMessage);
            chats[chatIndex].last_activity = new Date().toISOString();
            localStorage.setItem(this.chatsKey, JSON.stringify(chats));
            return newMessage;
        }
        return null;
    }

    saveChats(chats) {
        localStorage.setItem(this.chatsKey, JSON.stringify(chats));
    }

    // ==================== SESSION METHODS ====================
    setCurrentUser(user) {
        localStorage.setItem(this.currentUserKey, JSON.stringify(user));
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem(this.currentUserKey));
    }

    clearCurrentUser() {
        localStorage.removeItem(this.currentUserKey);
    }

    isUsernameTaken(username) {
        const users = this.getUsers();
        return users.some(user => user.username === username);
    }

    isEmailTaken(email) {
        const users = this.getUsers();
        return users.some(user => user.email === email);
    }
}

// ==================== ENHANCED APP MANAGER ====================
class AppManager {
    static db = new EnhancedDatabase();
    static currentPage = '';

    static init() {
        const currentUser = this.db.getCurrentUser();
        if (currentUser) {
            this.loadDashboard();
        } else {
            this.loadAuthPage();
        }
        this.bindEvents();
    }

    static bindEvents() {

        // Year level dropdown control based on course selection
document.addEventListener('change', (e) => {
    if (e.target.id === 'course') {
        this.handleCourseChange(e.target.value);
    }
});
        // Delegate all click events
        document.addEventListener('click', (e) => {
            this.handleClickEvents(e);
        });

        // Form submissions
        document.addEventListener('submit', (e) => {
            if (e.target.id === 'login-form') {
                e.preventDefault();
                this.handleLogin();
            } else if (e.target.id === 'post-item-form') {
                e.preventDefault();
                this.handlePostItem();
            } else if (e.target.id === 'forgot-password-form') {
                e.preventDefault();
                this.resetPassword();
            }
        });

        // Real-time validation
        document.addEventListener('input', (e) => {
            if (e.target.id === 'reg-username') {
                this.validateUsername(e.target.value);
            } else if (e.target.id === 'reg-email') {
                this.validateEmail(e.target.value);
            } else if (e.target.id === 'reg-password') {
                this.checkPasswordStrength(e.target.value);
            } else if (e.target.id === 'confirm-password') {
                this.validatePasswordMatch();
            }
        });
    }
static handleCourseChange(selectedCourse) {
    const yearLevelSelect = document.getElementById('year-level');
    if (!yearLevelSelect) return;
    
    if (selectedCourse === 'Senior High School') {
        // Disable year level for SHS
        yearLevelSelect.disabled = true;
        yearLevelSelect.value = ''; // Clear selection
        yearLevelSelect.style.opacity = '0.5';
        yearLevelSelect.style.cursor = 'not-allowed';
        
        // Add a note
        let note = yearLevelSelect.parentElement.querySelector('.shs-note');
        if (!note) {
            note = document.createElement('small');
            note.className = 'hint shs-note';
            note.style.color = 'var(--info)';
            note.style.display = 'block';
            note.style.marginTop = '5px';
            note.textContent = 'Year level not applicable for Senior High School';
            yearLevelSelect.parentElement.appendChild(note);
        }
    } else {
        // Enable year level for college programs
        yearLevelSelect.disabled = false;
        yearLevelSelect.style.opacity = '1';
        yearLevelSelect.style.cursor = 'pointer';
        
        // Remove SHS note if exists
        const note = yearLevelSelect.parentElement.querySelector('.shs-note');
        if (note) {
            note.remove();
        }
    }
}
    static handleClickEvents(e) {
        // Auth page switching
        if (e.target.id === 'show-register' || e.target.closest('#show-register')) {
            e.preventDefault();
            this.showRegisterForm();
        } else if (e.target.id === 'show-login' || e.target.closest('#show-login')) {
            e.preventDefault();
            this.showLoginForm();
        } 
        // Toggle password visibility
        else if (e.target.classList.contains('toggle-password') || e.target.closest('.toggle-password')) {
            const button = e.target.classList.contains('toggle-password') ? e.target : e.target.closest('.toggle-password');
            const targetId = button.dataset.target;
            const input = document.getElementById(targetId);
            const icon = button.querySelector('i');
            
            if (input && icon) {
                if (input.type === 'password') {
                    input.type = 'text';
                    icon.className = 'fas fa-eye-slash';
                } else {
                    input.type = 'password';
                    icon.className = 'fas fa-eye';
                }
            }
        }
        // Registration navigation
        else if (e.target.dataset.next === '2' || e.target.closest('[data-next="2"]')) {
            e.preventDefault();
            if (this.validateStep(1)) {
                this.goToStep(2);
            }
        } else if (e.target.dataset.prev === '1' || e.target.closest('[data-prev="1"]')) {
            e.preventDefault();
            this.goToStep(1);
        } else if (e.target.id === 'register-submit' || e.target.closest('#register-submit')) {
            e.preventDefault();
            this.handleRegistration();
        }
        // Wishlist button
        else if (e.target.classList.contains('item-wishlist') || e.target.closest('.item-wishlist')) {
            e.preventDefault();
            const wishlistBtn = e.target.classList.contains('item-wishlist') ? e.target : e.target.closest('.item-wishlist');
            const itemId = parseInt(wishlistBtn.dataset.itemId);
            if (itemId) {
                this.toggleWishlist(itemId, wishlistBtn);
            }
        }
        // Chat button
        else if (e.target.classList.contains('btn-chat') || e.target.closest('.btn-chat')) {
            e.preventDefault();
            const chatBtn = e.target.classList.contains('btn-chat') ? e.target : e.target.closest('.btn-chat');
            const itemId = parseInt(chatBtn.dataset.itemId);
            if (itemId) {
                this.startChat(itemId);
            }
        }
        // Mark as sold button
        else if (e.target.classList.contains('mark-sold') || e.target.closest('.mark-sold')) {
            e.preventDefault();
            const soldBtn = e.target.classList.contains('mark-sold') ? e.target : e.target.closest('.mark-sold');
            const itemId = parseInt(soldBtn.dataset.itemId);
            if (itemId) {
                this.markItemAsSold(itemId);
            }
        }
        // Tab buttons
        else if (e.target.classList.contains('tab-btn') || e.target.closest('.tab-btn')) {
            const tabBtn = e.target.classList.contains('tab-btn') ? e.target : e.target.closest('.tab-btn');
            const tabId = tabBtn.dataset.tab;
            if (tabId) {
                this.switchTab(tabId);
            }
        }
    }
    // ==================== PURCHASE HISTORY LOGIC ====================
    
    static loadPurchaseHistory() {
        this.currentPage = 'purchase-history';
        const app = document.getElementById('app');
        
        // 1. Get the new template
        const template = document.getElementById('templates').querySelector('#purchase-history-page');
        if (!template) {
            console.error('Purchase history template not found');
            return;
        }
        
        // 2. Clone it
        const clone = template.cloneNode(true);
        clone.removeAttribute('id'); // Avoid ID conflict
        app.innerHTML = '';
        app.appendChild(clone);

        // 3. Update Sidebar Info for this specific page
        const user = this.db.getCurrentUser();
        if (user) {
            const sidebarName = app.querySelector('#sidebar-name-ph');
            const sidebarEmail = app.querySelector('#sidebar-email-ph');
            const sidebarCourse = app.querySelector('#sidebar-course-ph');
            const sidebarAvatar = app.querySelector('#sidebar-avatar-ph');

            if (sidebarName) sidebarName.textContent = user.full_name;
            if (sidebarEmail) sidebarEmail.textContent = user.email;
            if (sidebarCourse) sidebarCourse.textContent = user.course;
            if (sidebarAvatar) sidebarAvatar.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(user.full_name)}&background=003366&color=fff`;

            // 4. Render the data
            this.renderPurchaseHistory();
        }
        
        this.initMobileMenu();
    }

        static renderPurchaseHistory() {
        const container = document.getElementById('purchase-history-container');
        if (!container) return;

        const user = this.db.getCurrentUser();
        
        // FIXED LOGIC: Strict integer comparison
        const allItems = this.db.getItems();
        const purchases = allItems.filter(item => 
            item.status === 'sold' && parseInt(item.buyer_id) === parseInt(user.id)
        );

        // Calculate Total
        const totalSpent = purchases.reduce((sum, item) => sum + item.price, 0);
        const spentEl = document.getElementById('ph-total-spent');
        if (spentEl) spentEl.textContent = `₱${totalSpent.toLocaleString()}`;

        if (purchases.length === 0) {
            container.innerHTML = `
                <div class="empty-state">
                    <i class="fas fa-shopping-bag"></i>
                    <p>You haven't bought any items yet.</p>
                    <button class="btn-primary" style="width:auto; margin-top:15px;" onclick="AppManager.loadMarketplace()">Go Shopping</button>
                </div>`;
            return;
        }

        container.innerHTML = purchases.map(item => `
            <div class="history-card">
                <div class="history-img-box">
                    <img src="${item.images[0]}" alt="${item.title}">
                </div>
                <div class="history-details">
                    <h4>${item.title}</h4>
                    <div class="history-meta">
                        <span><i class="far fa-calendar-alt"></i> ${new Date(item.sold_at || Date.now()).toLocaleDateString()}</span>
                        <span><i class="fas fa-user"></i> Seller: ${item.seller_name}</span>
                    </div>
                </div>
                <div class="history-right">
                    <span class="status-badge completed">Completed</span>
                    <div class="history-price">₱${item.price.toLocaleString()}</div>
                    <button class="btn-chat" onclick="AppManager.startChat(${item.id})" style="padding:5px 10px; font-size:0.8rem;">
                        <i class="fas fa-comment"></i> Chat
                    </button>
                </div>
            </div>
        `).join('');
    }
    // ==================== PAGE LOADING ====================
    static loadAuthPage() {
        this.currentPage = 'auth';
        const app = document.getElementById('app');
        const authPage = document.getElementById('templates').querySelector('#auth-page').cloneNode(true);
        app.innerHTML = '';
        app.appendChild(authPage);
        this.initRegistrationSystem();
    }

    static loadDashboard() {
        this.currentPage = 'dashboard';
        const app = document.getElementById('app');
        const dashboard = document.getElementById('templates').querySelector('#dashboard-page').cloneNode(true);
        app.innerHTML = '';
        app.appendChild(dashboard);
        
        const user = this.db.getCurrentUser();
        if (user) {
            this.updateUserInfo(user);
            this.loadItems();
            this.loadNotifications();
            this.updateNotificationBadge();
        }
        
        this.initMobileMenu();
    }

    static loadMarketplace() {
        this.currentPage = 'marketplace';
        const app = document.getElementById('app');
        const marketplace = document.getElementById('templates').querySelector('#marketplace-page').cloneNode(true);
        app.innerHTML = '';
        app.appendChild(marketplace);
        
        this.loadMarketplaceItems();
        this.loadCategoryFilters();
        
        const user = this.db.getCurrentUser();
        if (user) {
            this.updateUserInfoOnPage(user, 'mp');
        }
        
        this.initMobileMenu();
    }

    static loadMyListings() {
        this.currentPage = 'my-listings';
        const app = document.getElementById('app');
        const myListings = document.getElementById('templates').querySelector('#my-listings-page').cloneNode(true);
        app.innerHTML = '';
        app.appendChild(myListings);
        
        const user = this.db.getCurrentUser();
        if (user) {
            this.updateUserInfoOnPage(user, 'listings');
            this.loadUserListings(user.id);
        }
        
        this.initMobileMenu();
        this.initTabSystem();
    }

    static loadWishlistPage() {
        this.currentPage = 'wishlist';
        const app = document.getElementById('app');
        const wishlist = document.getElementById('templates').querySelector('#wishlist-page').cloneNode(true);
        app.innerHTML = '';
        app.appendChild(wishlist);
        
        const user = this.db.getCurrentUser();
        if (user) {
            this.updateUserInfoOnPage(user, 'wishlist');
            this.loadWishlistItems();
        }
        
        this.initMobileMenu();
    }

    static loadNotificationsPage() {
        this.currentPage = 'notifications';
        const app = document.getElementById('app');
        const notifications = document.getElementById('templates').querySelector('#notifications-page').cloneNode(true);
        app.innerHTML = '';
        app.appendChild(notifications);
        
        const user = this.db.getCurrentUser();
        if (user) {
            this.updateUserInfoOnPage(user, 'notifications');
            this.loadNotificationsList();
        }
        
        this.initMobileMenu();
    }

    static loadSettingsPage() {
        this.currentPage = 'settings';
        const app = document.getElementById('app');
        const settings = document.getElementById('templates').querySelector('#settings-page').cloneNode(true);
        app.innerHTML = '';
        app.appendChild(settings);
        
        const user = this.db.getCurrentUser();
        if (user) {
            this.updateUserInfoOnPage(user, 'settings');
        }
        
        this.initMobileMenu();
    }

    // ==================== TRADE PAGE & ACTIONS ====================
    static loadTradePage() {
        this.currentPage = 'trade';
        const app = document.getElementById('app');
        const template = document.getElementById('templates').querySelector('#trade-page');
        if (!template) return this.showNotification('Trade template not found', 'error');
        const clone = template.cloneNode(true);
        clone.removeAttribute('id');
        app.innerHTML = '';
        app.appendChild(clone);

        const user = this.db.getCurrentUser();
        if (user) {
            const sidebarName = app.querySelector('#sidebar-name-trade');
            const sidebarEmail = app.querySelector('#sidebar-email-trade');
            const sidebarCourse = app.querySelector('#sidebar-course-trade');
            const sidebarAvatar = app.querySelector('#sidebar-avatar-trade');
            if (sidebarName) sidebarName.textContent = user.full_name;
            if (sidebarEmail) sidebarEmail.textContent = user.email;
            if (sidebarCourse) sidebarCourse.textContent = user.course;
            if (sidebarAvatar) sidebarAvatar.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(user.full_name)}&background=003366&color=fff`;
        }

        this.renderTradeOffers();
        this.initMobileMenu();
    }

        static renderTradeOffers() {
        const container = document.getElementById('trade-offers-list');
        if (!container) return;
        const trades = this.db.getTrades().filter(t => t.status !== 'declined');
        
        if (!trades.length) {
            container.innerHTML = `
                <div class="empty-state">
                    <i class="fas fa-inbox"></i>
                    <p>No trade offers. When others send you offers, they'll appear here.</p>
                </div>
            `;
            return;
        }

        container.innerHTML = trades.map(t => {
            const statusColor = t.status === 'accepted' ? '#28a745' : t.status === 'counter' ? '#ffc107' : '#007bff';
            const statusText = t.status.charAt(0).toUpperCase() + t.status.slice(1);

            return `
            <!-- NEW LAYOUT: Uses Flexbox to prevent shrinking -->
            <div class="trade-row-card">
                <div class="trade-img-box">
                    <i class="fas fa-box"></i>
                </div>
                
                <div class="trade-info-area">
                    <h4>${t.item_title}</h4>
                    <p><strong>From:</strong> ${t.offered_by_name}</p>
                    <p><strong>Offering:</strong> ${t.offered_items.join(', ')}</p>
                    <div class="trade-looking-for" style="background:${statusColor}20; color:${statusColor}">
                        Status: ${statusText}
                    </div>
                </div>

                <div class="trade-action-area">
                    <button class="btn-primary" onclick="AppManager.openTradeOffer(${t.id})" style="width:100%; padding: 8px 15px; font-size: 0.9rem;">
                        View Details
                    </button>
                    <span style="font-size: 0.8rem; color: #999;">${new Date(t.created_at).toLocaleDateString()}</span>
                </div>
            </div>
            `;
        }).join('');
    }

    static openTradeOffer(tradeId) {
        const screen = document.getElementById('trade-screen');
        if (!screen) return;
        const trades = this.db.getTrades();
        const t = trades.find(x => x.id === tradeId);
        if (!t) {
            screen.innerHTML = `<div class="empty-state"><p>Offer not found.</p></div>`;
            return;
        }

        const isDeclined = t.status === 'declined';
        const isAccepted = t.status === 'accepted';
        const statusColor = isAccepted ? '#28a745' : isDeclined ? '#dc3545' : t.status === 'counter' ? '#ffc107' : '#007bff';
        const statusLabel = isAccepted ? 'ACCEPTED' : isDeclined ? 'DECLINED' : t.status === 'counter' ? 'AWAITING RESPONSE' : 'PENDING';

        let actionButtons = '';
        if (!isDeclined && !isAccepted) {
            actionButtons = `
                <div style="display:flex; gap:8px; margin-top:12px; flex-wrap:wrap;">
                    <button class="btn-primary" onclick="AppManager.acceptTrade(${t.id})" style="flex:1; min-width:80px;">✓ Accept</button>
                    <button style="background:#ff6b6b; color:#fff; border:none; padding:12px; border-radius:8px; cursor:pointer; flex:1; min-width:80px;" onclick="AppManager.declineTrade(${t.id})">✕ Decline</button>
                    <button style="background:#ffc107; color:#000; border:none; padding:12px; border-radius:8px; cursor:pointer; flex:1; min-width:80px;" onclick="AppManager.counterOffer(${t.id})">⟲ Counter</button>
                </div>
            `;
        } else {
            actionButtons = `
                <div style="padding:12px; background:#f0f0f0; border-radius:8px; text-align:center; margin-top:12px;">
                    <p style="color:var(--gray); margin:0;">This trade has been ${t.status}. You can still message the other party.</p>
                </div>
            `;
        }

        screen.innerHTML = `
            <div>
                <div style="display:flex; justify-content:space-between; align-items:start; margin-bottom:12px;">
                    <h4 style="margin:0; flex:1;">${t.item_title}</h4>
                    <span style="background:${statusColor}; color:#fff; padding:6px 12px; border-radius:20px; font-size:0.8rem; font-weight:600; white-space:nowrap;">${statusLabel}</span>
                </div>
                <p style="margin:8px 0;"><strong>From:</strong> ${t.offered_by_name}</p>
                <p style="margin:8px 0;"><strong>Offered Items:</strong> ${t.offered_items.join(', ')}</p>
                
                <div style="margin:12px 0;">
                    <strong>Conversation</strong>
                    <div id="trade-messages" style="max-height:200px; overflow-y:auto; padding:10px; border-radius:6px; background:var(--light); margin-top:8px;">
                        ${t.messages.length === 0 ? '<p style="color:var(--gray); text-align:center;">No messages yet</p>' : 
                          t.messages.map(m => {
                            const isYou = m.from === this.db.getCurrentUser().id;
                            return `
                                <div style="margin-bottom:10px; text-align:${isYou ? 'right' : 'left'};">
                                    <small style="color:var(--gray); display:block; margin-bottom:2px;">${isYou ? 'You' : t.offered_by_name}</small>
                                    <div style="display:inline-block; background:${isYou ? 'var(--primary)' : '#e0e0e0'}; color:${isYou ? '#fff' : '#000'}; padding:8px 12px; border-radius:8px; max-width:80%; word-wrap:break-word;">
                                        ${m.text}
                                    </div>
                                </div>
                            `;
                          }).join('')
                        }
                    </div>
                </div>

                ${actionButtons}

                <div style="margin-top:12px; display:flex; gap:8px; align-items:center;">
                    <input id="trade-message-input" placeholder="Write a message..." style="flex:1; padding:10px; border-radius:6px; border:1px solid var(--light-gray); font-family:'Poppins',sans-serif;">
                    <button class="btn-primary" onclick="AppManager.sendTradeMessage(${t.id})" style="padding:10px 16px;">Send</button>
                </div>
            </div>
        `;
    }

    static createDemoTrade() {
        const user = this.db.getCurrentUser() || { id: 1, full_name: 'Demo User' };
        const trade = {
            item_id: 3,
            item_title: 'Psychology Uniform Set',
            offered_by: user.id === 1 ? 2 : 1,
            offered_by_name: user.id === 1 ? 'NU Administrator' : user.full_name,
            offered_items: ['Set of pens'],
            status: 'pending',
            messages: [{ from: user.id, text: 'Demo trade created', at: new Date().toISOString() }],
            created_at: new Date().toISOString()
        };
        this.db.addTrade(trade);
        this.showNotification('Demo trade created', 'success');
        this.renderTradeOffers();
    }

    static acceptTrade(tradeId) {
        const updated = this.db.updateTradeStatus(tradeId, { status: 'accepted' });
        if (updated) {
            this.showNotification('Trade accepted! Check messages to coordinate next steps.', 'success');
            // Clear trade screen
            const screen = document.getElementById('trade-screen');
            if (screen) {
                screen.innerHTML = `
                    <div class="empty-state">
                        <i class="fas fa-check-circle"></i>
                        <p>Trade accepted! Select another offer to continue.</p>
                    </div>
                `;
            }
            // Refresh offers list
            setTimeout(() => this.renderTradeOffers(), 500);
        }
    }

    static declineTrade(tradeId) {
        if (!confirm('Are you sure you want to decline this trade offer?')) return;
        const trades = this.db.getTrades();
        const idx = trades.findIndex(t => t.id === tradeId);
        if (idx === -1) return this.showNotification('Offer not found', 'error');
        // Remove the trade from list
        trades.splice(idx, 1);
        this.db.saveTrades(trades);
        this.showNotification('Trade offer declined and removed', 'info');
        // Clear trade screen
        const screen = document.getElementById('trade-screen');
        if (screen) {
            screen.innerHTML = `
                <div class="empty-state">
                    <i class="fas fa-exchange-alt"></i>
                    <p>Select an offer to view details and respond.</p>
                </div>
            `;
        }
        // Refresh offers list
        setTimeout(() => this.renderTradeOffers(), 500);
    }

    static counterOffer(tradeId) {
        const text = prompt('Enter your counter-offer (e.g., condition changes, additional items, price adjustment):');
        if (!text) return;
        const trades = this.db.getTrades();
        const idx = trades.findIndex(t => t.id === tradeId);
        if (idx === -1) return this.showNotification('Offer not found', 'error');
        trades[idx].messages.push({ from: this.db.getCurrentUser().id, text, at: new Date().toISOString() });
        trades[idx].status = 'counter';
        this.db.saveTrades(trades);
        this.showNotification('Counter-offer sent! Waiting for response.', 'success');
        this.openTradeOffer(tradeId);
        this.renderTradeOffers();
    }

    static sendTradeMessage(tradeId) {
        const input = document.getElementById('trade-message-input');
        if (!input) return;
        const text = input.value.trim();
        if (!text) {
            this.showNotification('Please type a message', 'info');
            return;
        }
        const trades = this.db.getTrades();
        const idx = trades.findIndex(t => t.id === tradeId);
        if (idx === -1) return this.showNotification('Offer not found', 'error');
        trades[idx].messages.push({ from: this.db.getCurrentUser().id, text, at: new Date().toISOString() });
        this.db.saveTrades(trades);
        input.value = '';
        this.showNotification('Message sent', 'success');
        this.openTradeOffer(tradeId);
    }

    static switchTradeTab(tabName) {
        // Hide all tabs
        document.querySelectorAll('.trade-tab-content').forEach(t => t.style.display = 'none');
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.style.borderBottomColor = 'transparent';
            btn.style.color = 'var(--gray)';
            btn.style.fontWeight = '500';
        });

        // Show selected tab
        const tabEl = document.getElementById(`tab-${tabName}`);
        if (tabEl) tabEl.style.display = 'block';

        // Highlight button
        const btnEl = document.querySelector(`[data-tab="${tabName}"]`);
        if (btnEl) {
            btnEl.style.borderBottomColor = 'var(--primary)';
            btnEl.style.color = 'var(--primary)';
            btnEl.style.fontWeight = '600';
        }

        // Load tab data
        if (tabName === 'my-trade-items') this.renderMyTradeItems();
        if (tabName === 'sent-offers') this.renderSentOffers();
    }

    static renderMyTradeItems() {
        const container = document.getElementById('my-trade-items-list');
        if (!container) return;
        
        const user = this.db.getCurrentUser();
        const items = this.db.getTradeItems().filter(item => item.seller_id === user.id);

        if (!items.length) {
            container.innerHTML = `
                <div class="empty-state">
                    <i class="fas fa-cube"></i>
                    <p>You haven't posted any items for trade yet.</p>
                    <button class="btn-primary" onclick="AppManager.switchTradeTab('post-trade')" style="margin-top:15px;">Post Your First Item</button>
                </div>
            `;
            return;
        }

        // Use the helper to generate nice cards
        container.innerHTML = items.map(item => this.getTradeCardHTML(item, true)).join('');
    }
    static renderSentOffers() {
        const container = document.getElementById('sent-offers-list');
        if (!container) return;
        const user = this.db.getCurrentUser();
        const offers = this.db.getSentOffers().filter(o => o.from_user_id === user.id);

        if (!offers.length) {
            container.innerHTML = `
                <div class="empty-state">
                    <i class="fas fa-paper-plane"></i>
                    <p>You haven't sent any trade offers yet.</p>
                </div>
            `;
            return;
        }

        container.innerHTML = offers.map(offer => `
            <div class="item-card" style="padding:12px;">
                <h4>${offer.item_title}</h4>
                <p style="color:var(--gray); font-size:0.9rem;">To: ${offer.to_user_name}</p>
                <p style="font-size:0.9rem;"><strong>Offering:</strong> ${offer.offered_items.join(', ')}</p>
                <p style="font-size:0.85rem; color:var(--gray);">Status: <strong style="color:var(--primary);">${offer.status}</strong></p>
            </div>
        `).join('');
    }

    static postItemForTrade() {
        const title = document.getElementById('trade-item-title');
        const desc = document.getElementById('trade-item-description');
        const looking = document.getElementById('trade-looking-for');
        const condition = document.getElementById('trade-item-condition');
        const cash = document.getElementById('trade-cash-offer');

        if (!title.value || !desc.value || !looking.value || !condition.value) {
            this.showNotification('Please fill in all required fields', 'error');
            return;
        }

        const user = this.db.getCurrentUser();
        const item = {
            seller_id: user.id,
            seller_name: user.full_name,
            title: title.value,
            description: desc.value,
            condition: condition.value,
            cash_with_trade: parseInt(cash.value) || 0,
            looking_for: looking.value,
            created_at: new Date().toISOString()
        };

        this.db.addTradeItem(item);
        this.showNotification('Item posted for trade! People can now send you offers.', 'success');

        // Clear form
        document.getElementById('post-trade-form').reset();
        this.switchTradeTab('my-trade-items');
    }


    static loadChat() {
        this.currentPage = 'chat';
        const app = document.getElementById('app');
        const chat = document.getElementById('templates').querySelector('#chat-page').cloneNode(true);
        app.innerHTML = '';
        app.appendChild(chat);
        
        const user = this.db.getCurrentUser();
        if (user) {
            this.updateUserInfoOnPage(user, 'chat');
        }
        
        this.initMobileMenu();
        this.loadChats();
    }

    static loadPostItem() {
        this.currentPage = 'post-item';
        const app = document.getElementById('app');
        const postItem = document.getElementById('templates').querySelector('#post-item-page').cloneNode(true);
        app.innerHTML = '';
        app.appendChild(postItem);
        
        const user = this.db.getCurrentUser();
        if (user) {
            this.updateUserInfoOnPage(user, 'post');
        }
        
        this.initMobileMenu();
        this.loadCategoryOptions();
    }

    static loadProfile() {
        this.currentPage = 'profile';
        const app = document.getElementById('app');
        const profile = document.getElementById('templates').querySelector('#profile-page').cloneNode(true);
        app.innerHTML = '';
        app.appendChild(profile);
        
        const user = this.db.getCurrentUser();
        if (user) {
            this.updateUserInfoOnPage(user, 'profile');
            this.updateProfileDetails(user);
        }
        
        this.initMobileMenu();
    }

    // ==================== AUTH FUNCTIONS ====================
    static showLoginForm() {
        const loginCard = document.getElementById('login-card');
        const registerCard = document.getElementById('register-card');
        const forgotCard = document.getElementById('forgot-password-card');
        
        if (loginCard) loginCard.style.display = 'block';
        if (registerCard) registerCard.style.display = 'none';
        if (forgotCard) forgotCard.style.display = 'none';
    }

    static showRegisterForm() {
        const loginCard = document.getElementById('login-card');
        const registerCard = document.getElementById('register-card');
        const forgotCard = document.getElementById('forgot-password-card');
        
        if (loginCard) loginCard.style.display = 'none';
        if (registerCard) registerCard.style.display = 'block';
        if (forgotCard) forgotCard.style.display = 'none';
        this.goToStep(1);
    }

    static showForgotPasswordForm(e) {
        e.preventDefault();
        const loginCard = document.getElementById('login-card');
        const registerCard = document.getElementById('register-card');
        const forgotCard = document.getElementById('forgot-password-card');
        
        if (loginCard) loginCard.style.display = 'none';
        if (registerCard) registerCard.style.display = 'none';
        if (forgotCard) forgotCard.style.display = 'block';
        
        // Reset form
        document.getElementById('forgot-password-form').reset();
        document.getElementById('forgot-error').textContent = '';
        document.getElementById('send-code-btn').disabled = false;
        document.getElementById('reset-password-btn').disabled = true;
    }

    static updateForgotVerificationLabel() {
        const method = document.querySelector('input[name="verification-method"]:checked').value;
        const input = document.getElementById('forgot-verification');
        if (method === 'email') {
            input.placeholder = 'Code will be sent to your email';
        } else {
            input.placeholder = 'Code will be sent to your phone number';
        }
    }

    static sendForgotPasswordCode() {
        const username = document.getElementById('forgot-username').value.trim();
        const method = document.querySelector('input[name="verification-method"]:checked').value;
        const errorEl = document.getElementById('forgot-error');
        
        if (!username) {
            errorEl.textContent = 'Please enter your username or email';
            return;
        }
        
        // Find user
        const user = this.db.findUserByUsernameOrEmail(username);
        if (!user) {
            errorEl.textContent = 'User not found. Please check your username or email.';
            return;
        }
        
        // Generate verification code
        const code = Math.floor(100000 + Math.random() * 900000).toString();
        
        // Store code temporarily in session (in real app, send via email/SMS)
        sessionStorage.setItem('forgot_password_code', code);
        sessionStorage.setItem('forgot_password_user_id', user.id);
        sessionStorage.setItem('forgot_password_username', username);
        
        // Simulate sending code
        if (method === 'email') {
            this.showNotification(`Verification code sent to ${user.email}`, 'success');
        } else {
            const masked = user.contact_number.slice(0, 4) + '****' + user.contact_number.slice(-3);
            this.showNotification(`Verification code sent to ${masked}`, 'success');
        }
        
        // For demo purposes, show code (remove in production)
        errorEl.textContent = `Demo: Code is ${code}`;
        errorEl.style.color = '#28a745';
        
        // Enable verification input
        document.getElementById('forgot-verification').disabled = false;
        document.getElementById('send-code-btn').disabled = true;
    }

    static handleForgotPasswordSubmit() {
        const form = document.getElementById('forgot-password-form');
        if (!form) return;
        
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.resetPassword();
        });
    }

    static resetPassword() {
        const codeInput = document.getElementById('forgot-verification').value.trim();
        const storedCode = sessionStorage.getItem('forgot_password_code');
        const userId = parseInt(sessionStorage.getItem('forgot_password_user_id'));
        const errorEl = document.getElementById('forgot-error');
        
        if (!codeInput) {
            errorEl.textContent = 'Please enter the verification code';
            errorEl.style.color = '#dc3545';
            return;
        }
        
        if (codeInput !== storedCode) {
            errorEl.textContent = 'Invalid verification code. Please try again.';
            errorEl.style.color = '#dc3545';
            return;
        }
        
        // Code is valid - prompt for new password
        const newPassword = prompt('Enter your new password (minimum 8 characters):');
        if (!newPassword || newPassword.length < 8) {
            this.showNotification('Password must be at least 8 characters', 'error');
            return;
        }
        
        // Update user password
        const users = this.db.getUsers();
        const idx = users.findIndex(u => u.id === userId);
        if (idx !== -1) {
            users[idx].password = newPassword;
            this.db.saveUsers(users);
            
            // Clear session storage
            sessionStorage.removeItem('forgot_password_code');
            sessionStorage.removeItem('forgot_password_user_id');
            sessionStorage.removeItem('forgot_password_username');
            
            this.showNotification('Password reset successfully! You can now login with your new password.', 'success');
            
            // Return to login form
            setTimeout(() => this.showLoginForm(), 1500);
        }
    }

    static async handleLogin() {
        const usernameInput = document.getElementById('login-username');
        const passwordInput = document.getElementById('login-password');
        const errorElement = document.getElementById('login-error');

        if (!usernameInput || !passwordInput) return;

        const username = usernameInput.value;
        const password = passwordInput.value;

        if (!username || !password) {
            if (errorElement) {
                errorElement.textContent = 'Please fill in all fields';
            }
            return;
        }

        const user = this.db.validateLogin(username, password);
        
        if (user) {
            this.db.setCurrentUser(user);
            this.showNotification('Login successful!', 'success');
            setTimeout(() => {
                this.loadDashboard();
            }, 1000);
        } else {
            if (errorElement) {
                errorElement.textContent = 'Invalid credentials or account not approved yet';
            }
        }
    }

    static handleRegistration() {
    if (!this.validateStep(2)) {
        return;
    }
// Add full name validation
const fullName = document.getElementById('full-name').value;
const nameRegex = /^[a-zA-Z\s.'-]+$/;

if (!nameRegex.test(fullName)) {
    this.showNotification('Full name can only contain letters, spaces, periods, apostrophes, and hyphens. Numbers are not allowed.', 'error');
    isValid = false;
}
        // Add this validation for NU Fairview email
const googleEmail = document.getElementById('google-email').value;
const nuEmailRegex = /^[a-zA-Z0-9._%+-]+@students\.nu-fairview\.edu\.ph$/;

if (!nuEmailRegex.test(googleEmail)) {
    this.showError('google-email-error', 'Please use your official NU Fairview email: your.name@students.nu-fairview.edu.ph');
    return;
}
    const userData = {
        username: document.getElementById('reg-username').value,
        email: document.getElementById('reg-email').value,
        password: document.getElementById('reg-password').value,
        google_email: document.getElementById('google-email').value,
        full_name: document.getElementById('full-name').value,
        student_id: document.getElementById('student-id').value,
        course: document.getElementById('course').value,
        year_level: document.getElementById('year-level').value,
        contact_number: document.getElementById('contact-number').value
    };

    if (this.db.isUsernameTaken(userData.username)) {
        this.showError('username-error', 'Username already taken');
        return;
    }

    if (this.db.isEmailTaken(userData.email)) {
        this.showError('email-error', 'Email already registered');
        return;
    }

    const newUser = this.db.addUser(userData);

    // Clear the registration form
    this.clearRegistrationForm();
    
    // Add notification for admin
    this.db.addNotification({
        user_id: 2, // Admin user ID
        type: 'new_registration',
        title: 'New Registration Pending',
        message: `${userData.full_name} (${userData.course}) has registered and needs approval.`
    });

    this.showNotification('Account submitted for admin approval. You will be notified once approved.', 'success');
    
    // Show login form after 2 seconds
    setTimeout(() => {
        this.showLoginForm();
    }, 2000);

}
 static logout() {
        this.db.clearCurrentUser();
        this.showNotification('Logged out successfully', 'success');
        setTimeout(() => {
            this.loadAuthPage();
        }, 1000);
    
    }

    static clearRegistrationForm() {
    // Clear step 1 form
    document.getElementById('reg-username').value = '';
    document.getElementById('reg-email').value = '';
    document.getElementById('reg-password').value = '';
    document.getElementById('confirm-password').value = '';
    
    // Clear step 2 form
    document.getElementById('google-email').value = '';
    document.getElementById('student-id').value = '';
    document.getElementById('full-name').value = '';
    document.getElementById('course').value = '';
    document.getElementById('year-level').value = '';
    document.getElementById('contact-number').value = '';
    
    // Clear error messages
    document.getElementById('username-error').textContent = '';
    document.getElementById('email-error').textContent = '';
    document.getElementById('password-error').textContent = '';
    document.getElementById('google-email-error').textContent = '';
    
    // Reset password strength
    const strengthBar = document.querySelector('.strength-bar');
    const strengthText = document.querySelector('.strength-text');
    if (strengthBar && strengthText) {
        strengthBar.style.width = '0%';
        strengthBar.style.backgroundColor = '#dc3545';
        strengthText.textContent = 'Password strength';
        strengthText.style.color = 'var(--gray)';
    }
    
    // Reset to step 1
    this.goToStep(1);
}
        

    

    // ==================== REGISTRATION SYSTEM ====================
    static initRegistrationSystem() {
        this.goToStep(1);
    }

    static goToStep(step) {
        const stepForms = document.querySelectorAll('.step-form');
        stepForms.forEach(form => {
            form.classList.remove('active');
        });
        
        const targetForm = document.querySelector(`.step-form[data-step="${step}"]`);
        if (targetForm) {
            targetForm.classList.add('active');
        }
        
        const stepIndicators = document.querySelectorAll('.registration-steps .step');
        stepIndicators.forEach(indicator => {
            indicator.classList.remove('active');
            if (parseInt(indicator.dataset.step) <= step) {
                indicator.classList.add('active');
            }
        });
    }

    static validateStep(step) {
        let isValid = true;
        
        switch(step) {
            case 1:
                const username = document.getElementById('reg-username').value;
                const email = document.getElementById('reg-email').value;
                const password = document.getElementById('reg-password').value;
                const confirmPassword = document.getElementById('confirm-password').value;
                
                if (username.length < 3) {
                    this.showError('username-error', 'Username must be at least 3 characters');
                    isValid = false;
                }
                
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(email)) {
                    this.showError('email-error', 'Please enter a valid email address');
                    isValid = false;
                }
                
                if (password.length < 8) {
                    this.showError('password-error', 'Password must be at least 8 characters');
                    isValid = false;
                }
                
                if (password !== confirmPassword) {
                    this.showError('password-error', 'Passwords do not match');
                    isValid = false;
                }
                break;
                
             case 2:
            const googleEmail = document.getElementById('google-email').value;
            const studentId = document.getElementById('student-id').value;
            const fullName = document.getElementById('full-name').value;
            const course = document.getElementById('course').value;
            const yearLevel = document.getElementById('year-level').value;
            const contactNumber = document.getElementById('contact-number').value;
            
            // Check if course is SHS
            const isSHS = course === 'Senior High School';
            
            // Email validation with correct format
            const nuEmailRegex = /^[a-zA-Z0-9._%+-]+@students\.nu-fairview\.edu\.ph$/;
            if (!nuEmailRegex.test(googleEmail)) {
                this.showError('google-email-error', 'Please use: your.name@students.nu-fairview.edu.ph');
                isValid = false;
            }
            
            if (!googleEmail || !studentId || !fullName || !course || !contactNumber) {
                this.showNotification('Please fill in all required fields', 'error');
                isValid = false;
            }
            
            // Only validate year level if not SHS
            if (!isSHS && !yearLevel) {
                this.showNotification('Please select your year level', 'error');
                isValid = false;
            }
            break;
    }
    
    return isValid;
}

    static validateUsername(username) {
        const errorElement = document.getElementById('username-error');
        if (!errorElement) return;
        
        if (username.length < 3 && username.length > 0) {
            errorElement.textContent = 'Username must be at least 3 characters';
            errorElement.style.color = 'var(--accent)';
        } else if (username.length >= 3) {
            if (this.db.isUsernameTaken(username)) {
                errorElement.textContent = 'Username already taken';
                errorElement.style.color = 'var(--accent)';
            } else {
                errorElement.textContent = '✓ Username available';
                errorElement.style.color = 'var(--success)';
            }
        } else {
            errorElement.textContent = '';
        }
    }

    static validateEmail(email) {
        const errorElement = document.getElementById('email-error');
        if (!errorElement) return;
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (!emailRegex.test(email) && email.length > 0) {
            errorElement.textContent = 'Please enter a valid email address';
            errorElement.style.color = 'var(--accent)';
        } else if (emailRegex.test(email)) {
            if (this.db.isEmailTaken(email)) {
                errorElement.textContent = 'Email already registered';
                errorElement.style.color = 'var(--accent)';
            } else {
                errorElement.textContent = '✓ Email available';
                errorElement.style.color = 'var(--success)';
            }
        } else {
            errorElement.textContent = '';
        }
    }

    static checkPasswordStrength(password) {
        const strengthBar = document.querySelector('.strength-bar');
        const strengthText = document.querySelector('.strength-text');
        
        if (!strengthBar || !strengthText) return;
        
        let strength = 0;
        let text = 'Password strength';
        let color = '#dc3545';
        
        if (password.length >= 8) strength++;
        if (/[A-Z]/.test(password)) strength++;
        if (/[a-z]/.test(password)) strength++;
        if (/[0-9]/.test(password)) strength++;
        if (/[^A-Za-z0-9]/.test(password)) strength++;
        
        switch(strength) {
            case 0:
            case 1:
                text = 'Very Weak';
                color = '#dc3545';
                break;
            case 2:
                text = 'Weak';
                color = '#fd7e14';
                break;
            case 3:
                text = 'Fair';
                color = '#ffc107';
                break;
            case 4:
                text = 'Good';
                color = '#28a745';
                break;
            case 5:
                text = 'Strong';
                color = '#20c997';
                break;
        }
        
        strengthBar.style.width = `${(strength / 5) * 100}%`;
        strengthBar.style.backgroundColor = color;
        
        strengthText.textContent = text;
        strengthText.style.color = color;
    }

    static validatePasswordMatch() {
        const password = document.getElementById('reg-password').value;
        const confirmPassword = document.getElementById('confirm-password').value;
        const errorElement = document.getElementById('password-error');
        
        if (!errorElement) return;
        
        if (confirmPassword !== password && confirmPassword.length > 0) {
            errorElement.textContent = 'Passwords do not match';
            errorElement.style.color = 'var(--accent)';
        } else if (password.length >= 8 && confirmPassword === password) {
            errorElement.textContent = '✓ Passwords match';
            errorElement.style.color = 'var(--success)';
        } else {
            errorElement.textContent = '';
        }
    }

    // ==================== ITEM DISPLAY & WISHLIST ====================
    static loadItems() {
    
    const items = this.db.getItems();
    
    const newestItems = [...items].reverse();

    const featuredContainer = document.getElementById('featured-items');
    const recentContainer = document.getElementById('recent-items');
    
    if (featuredContainer) {
        this.renderItems(newestItems.slice(0, 4), featuredContainer);
    }
    
    if (recentContainer) {
        this.renderItems(newestItems.slice(0, 2), recentContainer);
    }
}
    // ==================== MARKETPLACE LOGIC ====================

static loadMarketplace() {
        this.currentPage = 'marketplace';
        const app = document.getElementById('app');
        
        // 1. Clone Template
        const template = document.getElementById('templates').querySelector('#marketplace-page');
        const clone = template.cloneNode(true);
        clone.removeAttribute('id');
        app.innerHTML = '';
        app.appendChild(clone);
        
        // 2. Update Sidebar
        const user = this.db.getCurrentUser();
        if (user) this.updateUserInfoOnPage(user, 'mp');
        
        // 3. Populate Filter Dropdowns (The important part!)
        this.populateFilterDropdowns();
        
        // 4. Initialize Mobile Menu
        this.initMobileMenu();

        // 5. Load Items
        this.loadMarketplaceItems();

        // 6. Bind Buttons
        this.initFilterEvents();
    }

    static populateFilterDropdowns() {
        const categories = this.db.getCategories(); // Get object of categories
        const catSelect = document.getElementById('filter-category');
        const progSelect = document.getElementById('filter-program');

        // Populate Categories
        if (catSelect) {
            let catHtml = '<option value="">All Categories</option>';
            // Sort keys alphabetically
            const sortedKeys = Object.keys(categories).sort();
            sortedKeys.forEach(cat => {
                // Capitalize first letter
                const label = cat.charAt(0).toUpperCase() + cat.slice(1);
                catHtml += `<option value="${cat}">${label}</option>`;
            });
            catSelect.innerHTML = catHtml;
        }

        // Populate Programs
        if (progSelect) {
            // Hardcoded list from your previous code
            const programs = [
                'Senior High School',
                'BS Information Technology',
                'BS Computer Science',
                'BS Civil Engineering',
                'BS Business Administration',
                'BS Accountancy',
                'BS Psychology',
                'BS Tourism Management',
                'BS Hospitality Management'
            ];
            
            let progHtml = '<option value="">All Programs</option>';
            programs.forEach(prog => {
                progHtml += `<option value="${prog}">${prog}</option>`;
            });
            progSelect.innerHTML = progHtml;
        }
    }

    static loadMarketplaceItems() {
        const items = this.db.getItems();
        const container = document.getElementById('marketplace-items');
        this.renderItems(items, container);
    }

    static initFilterEvents() {
        // Apply Button
        const applyBtn = document.getElementById('apply-filters-btn');
        if (applyBtn) {
            applyBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.applyMarketplaceFilters();
            });
        }

        // Clear Button
        const clearBtn = document.getElementById('clear-filters-btn');
        if (clearBtn) {
            clearBtn.addEventListener('click', (e) => {
                e.preventDefault();
                document.getElementById('filter-category').value = "";
                document.getElementById('filter-program').value = "";
                document.getElementById('marketplace-search').value = "";
                this.loadMarketplaceItems();
            });
        }

        // Search Bar (Live)
        const searchInput = document.getElementById('marketplace-search');
        if (searchInput) {
            searchInput.addEventListener('input', () => {
                this.applyMarketplaceFilters();
            });
        }
    }

    static applyMarketplaceFilters() {
        let items = this.db.getItems();
        const container = document.getElementById('marketplace-items');

        // 1. Get Values
        const searchVal = document.getElementById('marketplace-search').value.toLowerCase();
        const catVal = document.getElementById('filter-category').value;
        const progVal = document.getElementById('filter-program').value;

        // 2. Filter by Search
        if (searchVal) {
            items = items.filter(item => 
                item.title.toLowerCase().includes(searchVal) || 
                item.description.toLowerCase().includes(searchVal)
            );
        }

        // 3. Filter by Category
        if (catVal && catVal !== "") {
            items = items.filter(item => item.category === catVal);
        }

        // 4. Filter by Program
        if (progVal && progVal !== "") {
            items = items.filter(item => {
                // If item has no program list, hide it (safe default)
                if (!item.programs) return false;
                
                // If item is tagged with "All Programs", always show
                if (item.programs.includes('All Programs')) return true;

                // Check if item's program list includes the selected program
                return item.programs.includes(progVal);
            });
        }

        // 5. Render
        this.renderItems(items, container);
    }
        static renderItems(items, container) {
        if (!container) return;
        container.innerHTML = '';
        
        if (items.length === 0) {
            container.innerHTML = `
                <div class="no-items">
                    <i class="fas fa-box-open"></i>
                    <p>No items found</p>
                </div>`;
            return;
        }
        
        const currentUser = this.db.getCurrentUser();
        
        items.forEach(item => {
            // Check if item is in wishlist to decide solid (fas) or outline (far)
            const isInWishlist = currentUser ? this.db.isInWishlist(currentUser.id, item.id) : false;
            const isSeller = currentUser && currentUser.id === item.seller_id;
            
            const itemCard = document.createElement('div');
            itemCard.className = 'item-card';
            itemCard.innerHTML = `
                <div class="item-image" style="cursor: pointer;" onclick="AppManager.openProductPreview(${item.id})">
                    <img src="${item.images[0]}" alt="${item.title}">
                    <span class="item-status ${item.status}">${item.status.toUpperCase()}</span>
                    
                    <!-- FIX: Call toggleWishlist directly and stop propagation -->
                    <button class="item-wishlist" onclick="event.stopPropagation(); AppManager.toggleWishlist(${item.id}, this)">
                        <i class="${isInWishlist ? 'fas' : 'far'} fa-heart"></i>
                    </button>
                </div>
                
                <div class="item-info">
                    <h3 style="cursor: pointer;" onclick="AppManager.openProductPreview(${item.id})">${item.title}</h3>
                    <div class="item-price">₱${item.price.toLocaleString()}</div>
                    <div class="item-meta">
                        <span><i class="fas fa-user"></i> ${item.seller_name}</span>
                        <span><i class="fas fa-map-marker-alt"></i> ${item.location}</span>
                    </div>
                    
                    <div class="item-actions" style="display: flex; gap: 10px; height: 48px; margin-top: 15px;">
                        <button class="btn-chat" onclick="event.stopPropagation(); AppManager.startChat(${item.id})" style="flex: 1; height: 100%; display: flex; align-items: center; justify-content: center; border-radius: 8px;">
                            <i class="fas fa-comment"></i> Chat
                        </button>
                        ${isSeller ? `
                        <button class="btn-sold mark-sold" onclick="event.stopPropagation(); AppManager.markItemAsSold(${item.id})" ${item.status === 'sold' ? 'disabled' : ''} style="flex: 1; height: 100%; display: flex; align-items: center; justify-content: center; border-radius: 8px; white-space: nowrap; padding: 0 5px;">
                            <i class="fas fa-check-circle"></i> ${item.status === 'sold' ? 'Sold' : 'Mark as Sold'}
                        </button>
                        ` : ''}
                    </div>
                </div>
            `;
            container.appendChild(itemCard);
        });
    }

        static toggleWishlist(itemId, button) {
        const currentUser = this.db.getCurrentUser();
        if (!currentUser) {
            this.showNotification('Please login to add items to wishlist', 'error');
            return;
        }

        const isInWishlist = this.db.isInWishlist(currentUser.id, itemId);
        const icon = button.querySelector('i');
        
        if (isInWishlist) {
            // Remove from DB
            this.db.removeFromWishlist(currentUser.id, itemId);
            // Update Icon Visuals
            icon.className = 'far fa-heart'; 
            this.showNotification('Removed from wishlist', 'info');
        } else {
            // Add to DB
            this.db.addToWishlist(currentUser.id, itemId);
            // Update Icon Visuals
            icon.className = 'fas fa-heart';
            
            // Add a little pop animation
            icon.style.transform = "scale(1.3)";
            setTimeout(() => icon.style.transform = "scale(1)", 200);
            
            this.showNotification('Added to wishlist', 'success');
        }
        
        // If we are currently ON the wishlist page, reload the items so the removed one disappears
        if (this.currentPage === 'wishlist') {
            this.loadWishlistItems();
        }
    }

    static loadWishlistItems() {
        const currentUser = this.db.getCurrentUser();
        if (!currentUser) return;

        const wishlistIds = this.db.getWishlist(currentUser.id);
        const allItems = this.db.getItems();
        const wishlistItems = allItems.filter(item => wishlistIds.includes(item.id));
        
        const container = document.getElementById('wishlist-items');
        if (container) {
            this.renderItems(wishlistItems, container);
        }
    }

    static loadUserListings(userId) {
        // Regular Items
        const activeItems = this.db.getUserItems(userId).filter(i => i.status === 'available');
        const soldItems = this.db.getSoldItems(userId);
        
        // Trade Items
        const tradeItems = this.db.getTradeItems().filter(i => i.seller_id === userId);
        
        // Render Active
        const activeContainer = document.getElementById('my-listings-items');
        if (activeContainer) this.renderItems(activeItems, activeContainer);
        
        // Render Sold
        const soldContainer = document.getElementById('sold-items-list');
        if (soldContainer) this.renderItems(soldItems, soldContainer);

        // Render Trades (USING THE NEW UI)
        const tradeContainer = document.getElementById('trade-listings-list');
        if (tradeContainer) {
            if (tradeItems.length === 0) {
                tradeContainer.innerHTML = `<div class="empty-state"><i class="fas fa-exchange-alt"></i><p>No trade listings.</p></div>`;
            } else {
                // Use the helper to generate nice cards
                tradeContainer.innerHTML = tradeItems.map(item => this.getTradeCardHTML(item, true)).join('');
            }
        }
    }

    // ==================== CATEGORY SYSTEM ====================
    static loadCategoryFilters() {
        const container = document.querySelector('.category-filters');
        if (!container) return;

        const categories = this.db.getCategoryOptions();
        
        let html = `
            <div class="form-group">
                <label for="main-category">Browse Items</label>
                <select id="main-category" class="category-select">
                    <option value="">All Categories</option>
        `;
        
        Object.keys(categories.categories).forEach(category => {
            const formattedName = category.charAt(0).toUpperCase() + category.slice(1);
            html += `<option value="${category}">${formattedName}</option>`;
        });
        
        html += `
                </select>
            </div>
            <div class="form-group">
                <label for="sub-category">Subcategory</label>
                <select id="sub-category" class="category-select" disabled>
                    <option value="">All Subcategories</option>
                </select>
            </div>
            <div class="form-group">
                <label for="program-filter">For Program</label>
                <select id="program-filter" class="category-select">
                    <option value="">All Programs</option>
        `;
        
        categories.programs.forEach(program => {
            if (program !== 'All Programs') {
                html += `<option value="${program}">${program}</option>`;
            }
        });
        
        html += `
                </select>
            </div>
        `;
        
        container.innerHTML = html;
        
        // Add event listeners for category filtering
        document.getElementById('main-category').addEventListener('change', (e) => {
            this.updateSubcategories(e.target.value);
        });
    }

    static updateSubcategories(mainCategory) {
        const subCategorySelect = document.getElementById('sub-category');
        const categories = this.db.getCategoryOptions();
        
        if (mainCategory && categories.categories[mainCategory]) {
            subCategorySelect.innerHTML = '<option value="">All Subcategories</option>';
            categories.categories[mainCategory].forEach(subcat => {
                subCategorySelect.innerHTML += `<option value="${subcat}">${subcat}</option>`;
            });
            subCategorySelect.disabled = false;
        } else {
            subCategorySelect.innerHTML = '<option value="">All Subcategories</option>';
            subCategorySelect.disabled = true;
        }
    }

    static loadCategoryOptions() {
        const categorySelect = document.getElementById('item-category');
        const subcategorySelect = document.getElementById('item-subcategory');
        const programSelect = document.getElementById('item-programs');
        
        if (!categorySelect || !subcategorySelect || !programSelect) return;
        
        const categories = this.db.getCategoryOptions();
        
        // Load main categories
        categorySelect.innerHTML = '<option value="">Select Category</option>';
        Object.keys(categories.categories).forEach(category => {
            const formattedName = category.charAt(0).toUpperCase() + category.slice(1);
            categorySelect.innerHTML += `<option value="${category}">${formattedName}</option>`;
        });
        
        // Load programs (multiple select)
        programSelect.innerHTML = '';
        categories.programs.forEach(program => {
            if (program !== 'All Programs') {
                programSelect.innerHTML += `
                    <option value="${program}">${program}</option>
                `;
            }
        });
        
        // Update subcategories when main category changes
        categorySelect.addEventListener('change', (e) => {
            const mainCategory = e.target.value;
            if (mainCategory && categories.categories[mainCategory]) {
                subcategorySelect.innerHTML = '<option value="">Select Subcategory</option>';
                categories.categories[mainCategory].forEach(subcat => {
                    subcategorySelect.innerHTML += `<option value="${subcat}">${subcat}</option>`;
                });
                subcategorySelect.disabled = false;
            } else {
                subcategorySelect.innerHTML = '<option value="">Select Subcategory</option>';
                subcategorySelect.disabled = true;
            }
        });
    }

        // 1. UPDATE LOAD PROFILE TO FETCH ITEMS
    static loadProfile() {
        this.currentPage = 'profile';
        const app = document.getElementById('app');
        const profile = document.getElementById('templates').querySelector('#profile-page').cloneNode(true);
        app.innerHTML = '';
        app.appendChild(profile);
        
        const user = this.db.getCurrentUser();
        if (user) {
            this.updateUserInfoOnPage(user, 'profile');
            this.updateProfileDetails(user);
            
            // Update Large Profile Image
            const bigImg = document.getElementById('profile-img-large');
            if(bigImg) bigImg.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(user.full_name)}&background=003366&color=fff&size=100`;

            // Load Items (Default to 'all')
            this.filterProfileItems('all');
        }
        
        this.initMobileMenu();
    }

    // 2. NEW FUNCTION TO FILTER ITEMS
            static filterProfileItems(filterType) {
        const user = this.db.getCurrentUser();
        if (!user) return;

        // Visual: Update Active Tab
        document.querySelectorAll('.tab-btn').forEach(btn => {
            if(btn.hasAttribute('data-profile-tab')) {
                btn.style.borderBottomColor = 'transparent';
                btn.style.color = 'var(--gray)';
                btn.style.fontWeight = '500';
            }
        });
        
        const activeBtn = document.querySelector(`[data-profile-tab="${filterType}"]`);
        if(activeBtn) {
            activeBtn.style.borderBottomColor = 'var(--primary)';
            activeBtn.style.color = 'var(--primary)';
            activeBtn.style.fontWeight = '600';
        }

        const container = document.getElementById('profile-items-grid');
        if (!container) return;
        container.innerHTML = '';

        // --- LOGIC: MERGE ITEMS FOR "ALL" ---
        const allSaleItems = this.db.getUserItems(user.id);
        const allTradeItems = this.db.getTradeItems().filter(i => i.seller_id === user.id);
        
        // Add a 'type' flag to sorting
        const saleTagged = allSaleItems.map(i => ({...i, type: 'sale'}));
        const tradeTagged = allTradeItems.map(i => ({...i, type: 'trade'}));

        let displayItems = [];

        if (filterType === 'all') {
            // Combine and sort by date (newest first)
            displayItems = [...saleTagged, ...tradeTagged].sort((a, b) => 
                new Date(b.created_at) - new Date(a.created_at)
            );
        } else if (filterType === 'trade') {
            displayItems = tradeTagged;
        } else if (filterType === 'available') {
            displayItems = saleTagged.filter(i => i.status !== 'sold');
        } else if (filterType === 'sold') {
            displayItems = saleTagged.filter(i => i.status === 'sold');
        }

        if (displayItems.length === 0) {
            container.innerHTML = `<div class="empty-state"><i class="fas fa-folder-open"></i><p>No items found.</p></div>`;
            return;
        }

        // --- RENDER HYBRID GRID (Sales Cards + Trade Cards) ---
        // We cannot use simple .map().join() because renderItems (for sales) uses DOM elements for events.
        // We will loop and append.
        
        displayItems.forEach(item => {
            if (item.type === 'trade') {
                // Render Trade Card
                const wrapper = document.createElement('div');
                wrapper.innerHTML = this.getTradeCardHTML(item, true); // true = isOwner
                container.appendChild(wrapper.firstElementChild);
            } else {
                // Render Sale Card (reuse existing logic by creating a temp container then moving it)
                const tempDiv = document.createElement('div');
                this.renderItems([item], tempDiv); // Uses your existing standard card renderer
                if(tempDiv.firstElementChild) {
                    container.appendChild(tempDiv.firstElementChild);
                }
            }
        });
    }
        // ==================== FLOATING PREVIEW LOGIC ====================

            static openProductPreview(itemId) {
        const item = this.db.getItems().find(i => i.id === itemId);
        if (!item) return;

        const currentUser = this.db.getCurrentUser();
        const isInWishlist = currentUser ? this.db.isInWishlist(currentUser.id, itemId) : false;

        // Tags
        const tags = item.programs ? item.programs.map(p => `<span class="preview-tag">${p}</span>`).join('') : '';

        // DELIVERY LOGIC - Select correct icon
        const deliveryMethods = item.delivery_options || ["Flexible"];
        const deliveryHtml = deliveryMethods.map(method => {
            let icon = 'fa-question-circle';
            if (method.includes('Meetup')) icon = 'fa-handshake';
            if (method.includes('Delivery')) icon = 'fa-truck';
            return `<span class="delivery-tag"><i class="fas ${icon}"></i> ${method}</span>`;
        }).join('');

        const html = `
            <div class="preview-overlay" id="preview-overlay" onclick="AppManager.closeProductPreview(event)">
                <div class="preview-modal">
                    <button class="preview-close-btn" onclick="AppManager.closeProductPreview(event, true)">
                        <i class="fas fa-times"></i>
                    </button>
                    
                    <div class="preview-gallery">
                        <img src="${item.images[0]}" class="preview-main-img" id="main-preview-img">
                        <div class="preview-thumbnails">
                            <img src="${item.images[0]}" class="preview-thumb">
                        </div>
                    </div>
                    
                    <div class="preview-details">
                        <div class="preview-breadcrumbs">${item.category} / ${item.subcategory || 'General'}</div>
                        <h1 class="preview-title">${item.title}</h1>
                        <div class="preview-price">₱${item.price.toLocaleString()}</div>
                        
                        <div class="preview-seller">
                            <img src="https://ui-avatars.com/api/?name=${encodeURIComponent(item.seller_name)}&background=003366&color=fff" 
                                 style="width: 45px; height: 45px; border-radius: 50%;">
                            <div>
                                <div style="font-weight: 600;">${item.seller_name}</div>
                                <div style="font-size: 0.85rem; color: #666;">Seller</div>
                            </div>
                        </div>
                        
                        <div class="delivery-box">
                            <small style="display:block; color:#003366; margin-bottom:8px; text-transform:uppercase; font-size:0.75rem; letter-spacing:1px; font-weight:700;">
                                Preferences
                            </small>
                            ${deliveryHtml}
                        </div>

                        <div style="margin-bottom: 20px;">
                            <strong>Location:</strong> ${item.location} <br>
                            <strong>Posted:</strong> ${new Date(item.created_at).toLocaleDateString()}
                        </div>

                        <div style="margin-bottom: 20px;">${tags}</div>
                        
                        <h4 style="margin-bottom: 10px;">Description</h4>
                        <p style="color: #555; line-height: 1.6; white-space: pre-wrap;">${item.description}</p>
                        
                        <div style="margin-top: auto; display: flex; gap: 15px; align-items: center;">
                            <button class="btn-primary" onclick="AppManager.startChat(${item.id}); AppManager.closeProductPreview(event, true);" style="flex: 1; display: flex; align-items: center; justify-content: center; gap: 10px; padding: 12px;">
                                <i class="fas fa-comment-dots"></i> Message Seller
                            </button>
                            
                            <button class="modal-wishlist-btn" onclick="AppManager.toggleWishlist(${item.id}, this)">
                                <i class="${isInWishlist ? 'fas' : 'far'} fa-heart"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;

        const container = document.createElement('div');
        container.id = 'product-preview-wrapper';
        container.innerHTML = html;
        document.body.appendChild(container);
        document.body.style.overflow = 'hidden';
    }
        static closeProductPreview(event, force = false) {
        if (force || event.target.id === 'preview-overlay') {
            const wrapper = document.getElementById('product-preview-wrapper');
            if (wrapper) {
                wrapper.remove();
                document.body.style.overflow = 'auto'; // FIX: Enables scrolling again
            }
        }
    }
    // ==================== CHAT SYSTEM ====================
    static startChat(itemId) {
        const currentUser = this.db.getCurrentUser();
        if (!currentUser) {
            this.showNotification('Please login to start a chat', 'error');
            return;
        }

        const item = this.db.getItems().find(i => i.id === itemId);
        if (!item) return;

        if (currentUser.id === item.seller_id) {
            this.showNotification('You cannot chat with yourself about your own item', 'error');
            return;
        }

        // Create or get existing chat
        const chat = this.db.createChat(currentUser.id, item.seller_id, itemId);
        
        // Add notification for seller
        this.db.addNotification({
            user_id: item.seller_id,
            type: 'new_chat',
            title: 'New Chat Started',
            message: `${currentUser.full_name} started a chat about "${item.title}"`
        });

        this.showNotification('Chat started! Check your messages.', 'success');
        setTimeout(() => {
            this.loadChat();
        }, 1000);
    }

    static loadChats() {
        const currentUser = this.db.getCurrentUser();
        if (!currentUser) return;

        const chats = this.db.getChats(currentUser.id);
        const container = document.getElementById('chats-container');
        
        if (!container) return;
        
        if (chats.length === 0) {
            container.innerHTML = `
                <div class="no-chats">
                    <i class="fas fa-comments"></i>
                    <p>No chats yet. Start a chat about an item!</p>
                </div>
            `;
            return;
        }

        let html = '';
        chats.forEach(chat => {
            const otherUserId = chat.user1_id === currentUser.id ? chat.user2_id : chat.user1_id;
            const otherUser = this.db.getUsers().find(u => u.id === otherUserId);
            const item = this.db.getItems().find(i => i.id === chat.item_id);
            
            if (otherUser && item) {
                const lastMessage = chat.messages[chat.messages.length - 1];
                const preview = lastMessage ? lastMessage.message.substring(0, 50) + '...' : 'No messages yet';
                
                html += `
                    <div class="chat-item" data-chat-id="${chat.id}" style="display: flex; align-items: center; gap: 15px; padding: 15px; border: 1px solid var(--light-gray); border-radius: 10px; margin-bottom: 10px; cursor: pointer; transition: var(--transition);">
                        <img src="https://ui-avatars.com/api/?name=${encodeURIComponent(otherUser.full_name)}&background=003366&color=fff" 
                             alt="${otherUser.full_name}" style="width: 50px; height: 50px; border-radius: 50%;">
                        <div style="flex: 1;">
                            <h4 style="margin: 0; color: var(--dark);">${otherUser.full_name}</h4>
                            <p style="margin: 5px 0; color: var(--gray); font-size: 0.9rem;">${item.title}</p>
                            <small style="color: var(--gray);">${preview}</small>
                        </div>
                        <div style="color: var(--gray); font-size: 0.8rem;">
                            ${new Date(chat.last_activity).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                        </div>
                    </div>
                `;
            }
        });
        
        container.innerHTML = html;
        
        // Bind click event to open chat detail
        const chatItems = document.querySelectorAll('.chat-item');
        chatItems.forEach(item => {
            item.addEventListener('click', (e) => {
                const chatId = parseInt(item.dataset.chatId);
                this.openChat(chatId);
            });
        });
    }

    static openChat(chatId) {
        const currentUser = this.db.getCurrentUser();
        if (!currentUser) return;

        const chat = this.db.getChats(currentUser.id).find(c => c.id === chatId);
        if (!chat) return;

        const otherUserId = chat.user1_id === currentUser.id ? chat.user2_id : chat.user1_id;
        const otherUser = this.db.getUsers().find(u => u.id === otherUserId);
        const item = this.db.getItems().find(i => i.id === chat.item_id);

        if (!otherUser || !item) return;

        // Load chat detail page
        this.currentPage = 'chat-detail';
        const app = document.getElementById('app');
        const chatDetail = document.getElementById('templates').querySelector('#chat-detail-page').cloneNode(true);
        app.innerHTML = '';
        app.appendChild(chatDetail);

        // Update user info on sidebar
        this.updateUserInfoOnPage(currentUser, 'chat');

        // Update chat header
        document.getElementById('chat-user-avatar').src = `https://ui-avatars.com/api/?name=${encodeURIComponent(otherUser.full_name)}&background=003366&color=fff`;
        document.getElementById('chat-user-name').textContent = otherUser.full_name;
        document.getElementById('chat-item-title').textContent = item.title;

        // Load messages
        this.loadChatMessages(chatId);

        // Bind form submission
        const form = document.getElementById('chat-message-form');
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                this.sendChatMessage(chatId, currentUser.id);
            });
        }

        // Initialize mobile menu
        this.initMobileMenu();

        // Store current chat ID for sending messages
        this.currentChatId = chatId;
    }

    static loadChatMessages(chatId) {
        const currentUser = this.db.getCurrentUser();
        if (!currentUser) return;

        const chats = this.db.getChats(currentUser.id);
        const chat = chats.find(c => c.id === chatId);
        if (!chat) return;

        const container = document.getElementById('messages-container');
        if (!container) return;

        container.innerHTML = '';

        if (chat.messages.length === 0) {
            container.innerHTML = `
                <div style="text-align: center; padding: 40px 20px; color: var(--gray);">
                    <i class="fas fa-comments" style="font-size: 2rem; margin-bottom: 10px; opacity: 0.5;"></i>
                    <p>No messages yet. Start the conversation!</p>
                </div>
            `;
            return;
        }

        chat.messages.forEach(msg => {
            const messageDiv = document.createElement('div');
            const isSent = msg.sender_id === currentUser.id;
            messageDiv.className = `message ${isSent ? 'sent' : 'received'}`;
            messageDiv.innerHTML = `
                <div>
                    <div class="message-bubble">${msg.message}</div>
                    <div class="message-time">${new Date(msg.timestamp).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}</div>
                </div>
            `;
            container.appendChild(messageDiv);
        });

        // Scroll to bottom
        container.scrollTop = container.scrollHeight;
    }

    static sendChatMessage(chatId, senderId) {
        const inputField = document.getElementById('chat-message-input');
        if (!inputField) return;

        const message = inputField.value.trim();
        if (!message) return;

        // Add message to chat
        this.db.addMessage(chatId, senderId, message);

        // Clear input
        inputField.value = '';

        // Reload messages
        this.loadChatMessages(chatId);

        // Update last activity
        const chats = this.db.getChats(this.db.getCurrentUser().id);
        const chat = chats.find(c => c.id === chatId);
        if (chat) {
            chat.last_activity = new Date().toISOString();
            this.db.saveChats(chats);
        }
    }

    static markItemAsSold(itemId) {
        const currentUser = this.db.getCurrentUser();
        if (!currentUser) return;

        const item = this.db.getItems().find(i => i.id === itemId);
        if (!item || item.seller_id !== currentUser.id) {
            this.showNotification('You can only mark your own items as sold', 'error');
            return;
        }

        if (item.status === 'sold') {
            this.showNotification('Item is already sold', 'info');
            return;
        }

        // In a real app, you would get buyer ID from chat
        // For demo, we'll use the first chat's other user
        const chats = this.db.getChats(currentUser.id);
        const itemChat = chats.find(chat => chat.item_id === itemId);
        
        if (itemChat) {
            const buyerId = itemChat.user1_id === currentUser.id ? itemChat.user2_id : itemChat.user1_id;
            
            // Mark item as sold
            this.db.markItemAsSold(itemId, buyerId);
            
            // Update seller rating (demo rating)
            const rating = 5; // Perfect rating for demo
            this.db.updateUserRating(currentUser.id, rating);
            
            // Increment buyer's items bought
            this.db.incrementItemsBought(buyerId);
            
            // Add notification for buyer to rate
            this.db.addNotification({
                user_id: buyerId,
                type: 'rate_seller',
                title: 'Rate Your Seller',
                message: `Please rate ${currentUser.full_name} for your purchase of "${item.title}"`
            });
            
            this.showNotification('Item marked as sold! Buyer will be prompted to rate you.', 'success');
            
            // Show rating modal
            this.showRatingModal(currentUser, item);
            
            // Reload items
            setTimeout(() => {
                if (this.currentPage === 'marketplace' || document.getElementById('marketplace-items')) {
                    this.loadMarketplaceItems();
                } else if (this.currentPage === 'my-listings') {
                    this.loadUserListings(currentUser.id);
                } else {
                    this.loadItems();
                }
            }, 500);
        } else {
            this.showNotification('No active chats found for this item', 'error');
        }
    }

    static showRatingModal(seller, item) {
        const modal = document.createElement('div');
        modal.className = 'modal-overlay active';
        modal.innerHTML = `
            <div class="modal" style="max-width: 500px;">
                <div class="modal-header">
                    <h2>Rate Your Seller</h2>
                    <button class="modal-close">&times;</button>
                </div>
                <div class="modal-body">
                    <div style="text-align: center; padding: 20px 0;">
                        <h3>How was your experience with ${seller.full_name}?</h3>
                        <p>You purchased: <strong>${item.title}</strong></p>
                        
                        <div style="margin: 30px 0;">
                            <div class="star-rating" style="font-size: 2.5rem; color: var(--secondary); margin-bottom: 20px;">
                                <i class="fas fa-star" data-rating="1"></i>
                                <i class="fas fa-star" data-rating="2"></i>
                                <i class="fas fa-star" data-rating="3"></i>
                                <i class="fas fa-star" data-rating="4"></i>
                                <i class="fas fa-star" data-rating="5"></i>
                            </div>
                            
                            <div style="margin-bottom: 20px;">
                                <label>Comments (optional)</label>
                                <textarea placeholder="Share your experience..." rows="3" style="width: 100%; padding: 10px; border: 1px solid var(--light-gray); border-radius: 8px;"></textarea>
                            </div>
                            
                            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 20px;">
                                <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
                                    <input type="checkbox">
                                    <span>Seller was nice</span>
                                </label>
                                <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
                                    <input type="checkbox">
                                    <span>Smooth transaction</span>
                                </label>
                                <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
                                    <input type="checkbox">
                                    <span>Reasonable price</span>
                                </label>
                                <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
                                    <input type="checkbox">
                                    <span>Good communication</span>
                                </label>
                            </div>
                        </div>
                        
                        <button class="btn-primary" style="width: 100%;">
                            <i class="fas fa-star"></i> Submit Rating
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Star rating interaction
        const stars = modal.querySelectorAll('.star-rating i');
        stars.forEach(star => {
            star.addEventListener('click', () => {
                const rating = parseInt(star.dataset.rating);
                stars.forEach((s, index) => {
                    if (index < rating) {
                        s.style.color = 'var(--secondary)';
                    } else {
                        s.style.color = 'var(--light-gray)';
                    }
                });
            });
        });
        
        // Close modal
        modal.querySelector('.modal-close').addEventListener('click', () => {
            modal.remove();
        });
        
        // Submit rating
        modal.querySelector('.btn-primary').addEventListener('click', () => {
            this.showNotification('Thank you for your rating!', 'success');
            modal.remove();
        });
    }

    // ==================== NOTIFICATION SYSTEM ====================
    static loadNotifications() {
        const currentUser = this.db.getCurrentUser();
        if (!currentUser) return;

        const notifications = this.db.getNotifications(currentUser.id);
        this.updateNotificationBadge();
    }

    static loadNotificationsList() {
        const currentUser = this.db.getCurrentUser();
        if (!currentUser) return;

        const notifications = this.db.getNotifications(currentUser.id);
        const container = document.getElementById('notifications-container');
        
        if (!container) return;
        
        if (notifications.length === 0) {
            container.innerHTML = `
                <div class="no-notifications" style="text-align: center; padding: 60px 20px; color: var(--gray);">
                    <i class="fas fa-bell-slash" style="font-size: 4rem; margin-bottom: 20px;"></i>
                    <p>No notifications yet</p>
                </div>
            `;
            return;
        }

        let html = '';
        notifications.forEach(notification => {
            html += `
                <div class="notification-item ${notification.read ? 'read' : 'unread'}" data-notification-id="${notification.id}" style="display: flex; align-items: flex-start; gap: 15px; padding: 20px; border: 1px solid var(--light-gray); border-radius: 10px; margin-bottom: 10px; background: ${notification.read ? 'white' : 'var(--light)'};">
                    <div class="notification-icon" style="color: var(--primary); font-size: 1.2rem;">
                        <i class="fas fa-${this.getNotificationIcon(notification.type)}"></i>
                    </div>
                    <div class="notification-content" style="flex: 1;">
                        <h4 style="margin: 0 0 5px 0; color: var(--dark);">${notification.title}</h4>
                        <p style="margin: 0 0 5px 0; color: var(--gray);">${notification.message}</p>
                        <small style="color: var(--gray);">${new Date(notification.created_at).toLocaleString()}</small>
                    </div>
                    ${!notification.read ? '<span class="notification-dot" style="width: 10px; height: 10px; background: var(--accent); border-radius: 50%;"></span>' : ''}
                </div>
            `;
        });
        
        container.innerHTML = html;
    }

    static getNotificationIcon(type) {
        const icons = {
            'welcome': 'handshake',
            'new_registration': 'user-plus',
            'new_chat': 'comments',
            'rate_seller': 'star',
            'item_viewed': 'eye',
            'default': 'bell'
        };
        return icons[type] || icons.default;
    }

    static updateNotificationBadge() {
        const currentUser = this.db.getCurrentUser();
        if (!currentUser) return;

        const unreadCount = this.db.getUnreadNotificationCount(currentUser.id);
        const badges = document.querySelectorAll('.nav-links .badge');
        
        badges.forEach(badge => {
            if (unreadCount > 0) {
                badge.textContent = unreadCount;
                badge.style.display = 'block';
            } else {
                badge.style.display = 'none';
            }
        });
    }

    static markAllNotificationsAsRead() {
        const currentUser = this.db.getCurrentUser();
        if (!currentUser) return;

        this.db.markAllNotificationsAsRead(currentUser.id);
        this.loadNotificationsList();
        this.updateNotificationBadge();
        this.showNotification('All notifications marked as read', 'success');
    }

    // ==================== POST ITEM ====================
            static handlePostItem() {
        const currentUser = this.db.getCurrentUser();
        if (!currentUser) {
            this.showNotification('Please login to post items', 'error');
            return;
        }

        const title = document.getElementById('item-title').value;
        const price = parseFloat(document.getElementById('item-price').value);
        const description = document.getElementById('item-description').value;
        const location = document.getElementById('item-location').value;
        const category = document.getElementById('item-category').value;
        
        // 1. CAPTURE DELIVERY OPTIONS
        const deliveryCheckboxes = document.querySelectorAll('input[name="delivery"]:checked');
        let deliveryOptions = Array.from(deliveryCheckboxes).map(cb => cb.value);
        if (deliveryOptions.length === 0) deliveryOptions = ["Contact Seller for details"];

        const subcategory = ""; 

        // --- 2. SMART PROGRAM LOGIC (THE FIX) ---
        const programCheckboxes = document.querySelectorAll('input[name="programs"]:checked');
        let programs = Array.from(programCheckboxes).map(cb => cb.value);

        // Check if there are any "Specific" programs selected (anything that is NOT "All Programs")
        const hasSpecificPrograms = programs.some(p => p !== "All Programs");

        if (hasSpecificPrograms) {
            // If specific programs are selected, REMOVE "All Programs" from the list
            // This ensures only "BS IT", "BS CS", etc. show up in the preview
            programs = programs.filter(p => p !== "All Programs");
        } 
        else if (programs.length === 0) {
            // If nothing is selected at all, default to "All Programs"
            programs = ["All Programs"];
        }
        // If only "All Programs" was checked, it stays as ["All Programs"]

        if (!title || !price || !description || !location || !category) {
            this.showNotification('Please fill in all required fields (*)', 'error');
            return;
        }

        const itemData = {
            title: title,
            price: price,
            images: ["https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=300&fit=crop"],
            status: "available",
            category: category,
            subcategory: subcategory,
            seller_id: currentUser.id,
            seller_name: currentUser.full_name,
            location: location,
            description: description,
            programs: programs,
            delivery_options: deliveryOptions,
            views: 0,
            wishlist_count: 0,
            created_at: new Date().toISOString()
        };

        this.db.addItem(itemData);
        this.showNotification('Item posted successfully!', 'success');
        
        setTimeout(() => { this.loadMarketplace(); }, 1000);
    }
    // ==================== UTILITY FUNCTIONS ====================
    static updateUserInfo(user) {
        const sidebarName = document.getElementById('sidebar-name');
        const sidebarEmail = document.getElementById('sidebar-email');
        const sidebarCourse = document.getElementById('sidebar-course');
        const welcomeName = document.getElementById('welcome-name');
        
        if (sidebarName) sidebarName.textContent = user.full_name;
        if (sidebarEmail) sidebarEmail.textContent = user.email;
        if (sidebarCourse) sidebarCourse.textContent = user.course;
        if (welcomeName) welcomeName.textContent = user.full_name;
    }

    static updateUserInfoOnPage(user, pageSuffix) {
        const sidebarName = document.getElementById(`sidebar-name-${pageSuffix}`);
        const sidebarEmail = document.getElementById(`sidebar-email-${pageSuffix}`);
        const sidebarCourse = document.getElementById(`sidebar-course-${pageSuffix}`);
        
        if (sidebarName) sidebarName.textContent = user.full_name;
        if (sidebarEmail) sidebarEmail.textContent = user.email;
        if (sidebarCourse) sidebarCourse.textContent = user.course;
    }

    static updateProfileDetails(user) {
        const fullnameElement = document.getElementById('profile-fullname');
        const emailElement = document.getElementById('profile-email');
        const courseElement = document.getElementById('profile-course');
        const joinedElement = document.getElementById('profile-joined');
        const soldElement = document.getElementById('profile-items-sold');
        const boughtElement = document.getElementById('profile-items-bought');
        const ratingElement = document.getElementById('profile-rating');
        
        if (fullnameElement) fullnameElement.textContent = user.full_name;
        if (emailElement) emailElement.textContent = user.google_email;
        if (courseElement) courseElement.textContent = `${user.course} - ${user.year_level}${this.getOrdinalSuffix(user.year_level)} Year`;
        if (joinedElement && user.created_at) {
            const date = new Date(user.created_at);
            joinedElement.textContent = date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
        }
        if (soldElement) soldElement.textContent = user.items_sold || 0;
        if (boughtElement) boughtElement.textContent = user.items_bought || 0;
        if (ratingElement) {
            ratingElement.textContent = user.seller_rating > 0 ? 
                `⭐ ${user.seller_rating.toFixed(1)} (${user.rating_count} ratings)` : 
                'No ratings yet';
        }
    }

    static getOrdinalSuffix(num) {
        if (num === '1') return 'st';
        if (num === '2') return 'nd';
        if (num === '3') return 'rd';
        return 'th';
    }

    static initMobileMenu() {
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const navLinks = document.querySelector('.nav-links');
        
        if (mobileMenuBtn && navLinks) {
            mobileMenuBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                navLinks.classList.toggle('active');
            });
            
            document.addEventListener('click', (e) => {
                if (!e.target.closest('.nav-container') && navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                }
            });
        }
    }

    static initTabSystem() {
        const tabBtns = document.querySelectorAll('.tab-btn');
        const tabContents = document.querySelectorAll('.tab-content');
        
        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const tabId = btn.dataset.tab;
                
                // Update active tab button
                tabBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                // Show active tab content
                tabContents.forEach(content => {
                    content.classList.remove('active');
                    if (content.id === tabId) {
                        content.classList.add('active');
                    }
                });
            });
        });
    }

    static switchTab(tabId) {
        const tabBtns = document.querySelectorAll('.tab-btn');
        const tabContents = document.querySelectorAll('.tab-content');
        
        // Update active tab button
        tabBtns.forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.tab === tabId) {
                btn.classList.add('active');
            }
        });
        
        // Show active tab content
        tabContents.forEach(content => {
            content.classList.remove('active');
            if (content.id === tabId) {
                content.classList.add('active');
            }
        });
    }

    static showError(elementId, message) {
        const element = document.getElementById(elementId);
        if (element) {
            element.textContent = message;
            element.style.color = 'var(--accent)';
        }
    }
        // ==================== NEW BROWSE TRADES LOGIC ====================

    static loadBrowseTrades() {
        this.currentPage = 'browse-trades';
        const app = document.getElementById('app');
        
        // Clone the new template
        const template = document.getElementById('templates').querySelector('#browse-trades-page');
        const clone = template.cloneNode(true);
        clone.removeAttribute('id');
        app.innerHTML = '';
        app.appendChild(clone);
        
        const user = this.db.getCurrentUser();
        if (user) {
            this.updateUserInfoOnPage(user, 'bt'); // 'bt' for browse trades
        }
        
        this.renderBrowseTradesItems();
        this.initMobileMenu();
    }
         // Helper to generate the card HTML (Matches the CSS above)
    static getTradeCardHTML(item, isOwner) {
        const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(item.seller_name)}&background=003366&color=fff`;
        const dateStr = new Date(item.created_at).toLocaleDateString();

        return `
        <div class="trade-card">
            <div class="trade-card-header">
                <div class="trade-user">
                    <img src="${avatarUrl}" alt="Avatar">
                    <span>${item.seller_name}</span>
                </div>
                <span class="trade-date">${dateStr}</span>
            </div>
            <div class="trade-card-body">
                <h3 class="trade-title">${item.title}</h3>
                <p class="trade-desc">${item.description}</p>
                
                <div class="trade-wants-box">
                    <span class="trade-wants-label">Looking For:</span>
                    <div class="trade-wants-text">${item.looking_for}</div>
                    ${item.cash_with_trade ? `<div class="trade-cash-badge">+ ₱${item.cash_with_trade.toLocaleString()} Cash</div>` : ''}
                </div>

                ${isOwner ? 
                    `<button class="btn-trade-action own"><i class="fas fa-user"></i> Your Listing</button>` :
                    `<button class="btn-trade-action offer" onclick="AppManager.openMakeOfferModal(${item.id})"><i class="fas fa-hand-holding"></i> Make an Offer</button>`
                }
            </div>
        </div>`;
    }

            static renderBrowseTradesItems() {
        const container = document.getElementById('browse-trades-grid');
        if (!container) return;

        // Get items listed for trade
        const tradeItems = this.db.getTradeItems(); 
        const currentUser = this.db.getCurrentUser();

        // Empty State
        if (tradeItems.length === 0) {
            container.innerHTML = `
                <div class="empty-state">
                    <i class="fas fa-exchange-alt"></i>
                    <p>No items currently listed for trade.</p>
                </div>`;
            return;
        }

        container.innerHTML = tradeItems.map(item => {
            const isOwner = currentUser && item.seller_id === currentUser.id;
            
            // Generate Avatar URL
            const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(item.seller_name)}&background=003366&color=fff`;
            
            // Use a placeholder image if none exists (for trade items)
            const imgUrl = item.images && item.images.length > 0 
                ? item.images[0] 
                : "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=300&fit=crop";

            return `
            <div class="item-card">
                <!-- Image Section -->
                <div class="item-image" style="cursor: pointer;">
                    <img src="${imgUrl}" alt="${item.title}">
                    <span class="item-status" style="background: var(--secondary); color: var(--dark);">TRADE</span>
                </div>
                
                <!-- Info Section -->
                <div class="item-info">
                    <h3 style="cursor: pointer; margin-bottom: 5px;">${item.title}</h3>
                    
                    <!-- "Wants" Section (Replaces Price) -->
                    <div style="color: var(--primary); font-weight: 700; font-size: 1.1rem; margin-bottom: 10px; line-height: 1.3;">
                        <span style="font-size: 0.8rem; color: var(--gray); font-weight: 500; display: block;">Wants:</span>
                        ${item.looking_for}
                    </div>
                    
                    <!-- Location & Seller -->
                    <div class="item-meta">
                        <span><i class="fas fa-user"></i> ${item.seller_name}</span>
                        <span><i class="fas fa-map-marker-alt"></i> ${item.location || 'NU Fairview'}</span>
                    </div>
                    
                    <!-- Action Button -->
                    <div class="item-actions" style="margin-top: 15px;">
                        ${isOwner ? 
                            `<button class="btn-chat" disabled style="background: #eee; color: #999; width: 100%;">
                                Your Listing
                            </button>` 
                            :
                            `<button class="btn-primary" onclick="AppManager.openMakeOfferModal(${item.id})" style="width: 100%; display: flex; align-items: center; justify-content: center; gap: 8px;">
                                <i class="fas fa-hand-holding"></i> Make an Offer
                            </button>`
                        }
                    </div>
                </div>
            </div>
            `;
        }).join('');
    }
    // ==================== MAKE OFFER MODAL LOGIC ====================

    static openMakeOfferModal(tradeItemId) {
        // Find the item being traded for
        const targetItem = this.db.getTradeItems().find(i => i.id === tradeItemId);
        if (!targetItem) return;

        // Create Modal HTML
        const modal = document.createElement('div');
        modal.className = 'modal-overlay active';
        modal.innerHTML = `
            <div class="modal" style="max-width: 500px;">
                <div class="modal-header">
                    <h2>Make a Trade Offer</h2>
                    <button class="modal-close">&times;</button>
                </div>
                <div class="modal-body">
                    <p style="margin-bottom: 15px;">You are offering to trade for: <strong>${targetItem.title}</strong></p>
                    
                    <div class="form-group">
                        <label>What are you offering? *</label>
                        <input type="text" id="offer-items" placeholder="e.g., My Canon Camera + Tripod" class="full-width">
                    </div>

                    <div class="form-group">
                        <label>Add Cash? (Optional)</label>
                        <input type="number" id="offer-cash" placeholder="Amount in ₱" class="full-width">
                    </div>

                    <div class="form-group">
                        <label>Message (Optional)</label>
                        <textarea id="offer-message" rows="3" placeholder="Condition details, meetup preference..." class="full-width"></textarea>
                    </div>

                    <button class="btn-primary" id="submit-offer-btn">
                        <i class="fas fa-paper-plane"></i> Send Offer
                    </button>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        // Close Event
        modal.querySelector('.modal-close').addEventListener('click', () => modal.remove());

        // Submit Event
        modal.querySelector('#submit-offer-btn').addEventListener('click', () => {
            this.submitTradeOffer(targetItem, modal);
        });
    }

        static submitTradeOffer(targetItem, modalElement) {
        const offeredItems = document.getElementById('offer-items').value;
        const cash = document.getElementById('offer-cash').value;
        const message = document.getElementById('offer-message').value;
        const currentUser = this.db.getCurrentUser();

        if (!offeredItems) {
            alert("Please specify what you are offering.");
            return;
        }

        // Create the Sent Offer Object
        const offer = {
            id: Date.now(),
            to_user_id: targetItem.seller_id,
            to_user_name: targetItem.seller_name,
            from_user_id: currentUser.id,
            item_title: targetItem.title,
            offered_items: [offeredItems + (cash ? ` + ₱${cash}` : '')],
            status: 'pending',
            created_at: new Date().toISOString()
        };

        // Save to DB
        this.db.addSentOffer(offer);

        // Add Notification
        this.db.addNotification({
            user_id: targetItem.seller_id,
            type: 'default',
            title: 'New Trade Offer',
            message: `${currentUser.full_name} sent an offer for your ${targetItem.title}`
        });

        // Close Modal
        if(modalElement) modalElement.remove();
        
        this.showNotification("Offer sent! Redirecting...", "success");

        // === REDIRECT LOGIC ===
        // 1. Load the main Trade Page
        this.loadTradePage();
        
        // 2. Wait a tiny bit for the HTML to render, then switch to the "Sent Offers" tab
        setTimeout(() => {
            this.switchTradeTab('sent-offers');
        }, 100);
    }

    static showNotification(message, type = 'info') {
        // Remove existing notifications
        document.querySelectorAll('.notification-toast').forEach(toast => toast.remove());
        
        const notification = document.createElement('div');
        notification.className = `notification-toast ${type}`;
        notification.innerHTML = `
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
            <span>${message}</span>
            <button class="close-toast">&times;</button>
        `;
        
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: white;
            padding: 15px 20px;
            border-radius: 10px;
            box-shadow: 0 5px 20px rgba(0,0,0,0.1);
            display: flex;
            align-items: center;
            gap: 15px;
            z-index: 10000;
            animation: slideIn 0.3s ease;
            border-left: 4px solid ${type === 'success' ? 'var(--success)' : type === 'error' ? 'var(--accent)' : 'var(--primary)'};
        `;
        
        notification.querySelector('.close-toast').addEventListener('click', function() {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        });
        
        setTimeout(() => {
            if (notification.parentElement) {
                notification.style.animation = 'slideOut 0.3s ease';
                setTimeout(() => notification.remove(), 300);
            }
        }, 5000);
        
        document.body.appendChild(notification);
    }
}
// ==================== INITIALIZE APP ====================
document.addEventListener('DOMContentLoaded', () => {
    AppManager.init();

    function showPurchaseHistory() {
    document.getElementById("main-content").innerHTML = `
        <h2>Purchase History</h2>
        <p>This is where purchases will show.</p>
    `;
}

});