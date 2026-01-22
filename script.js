// ==================== ENHANCED MOCK DATABASE ====================
class EnhancedDatabase {
    constructor() {
        this.usersKey = 'dealme_nu_users';
        this.currentUserKey = 'dealme_nu_current_user';
        this.itemsKey = 'dealme_nu_items';
        this.wishlistKey = 'dealme_nu_wishlist';
        this.chatsKey = 'dealme_nu_chats';
        this.notificationsKey = 'dealme_nu_notifications';
        this.categoriesKey = 'dealme_nu_categories';
        this.initAllData();
    }

    initAllData() {
        this.initUsers();
        this.initItems();
        this.initCategories();
        this.initNotifications();
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
        const user = this.db.getCurrentUser();
        
        // LOGIC: Get items where buyer_id is the current user
        const allItems = this.db.getItems();
        const purchases = allItems.filter(item => item.buyer_id === user.id && item.status === 'sold');

        // Update Stats (Total Spent)
        const totalSpent = purchases.reduce((sum, item) => sum + item.price, 0);
        const spentEl = document.getElementById('ph-total-spent');
        if (spentEl) spentEl.textContent = `₱${totalSpent.toLocaleString()}`;

        // Empty State
        if (purchases.length === 0) {
            container.innerHTML = `
                <div class="empty-state">
                    <i class="fas fa-shopping-bag"></i>
                    <p>You haven't bought any items yet.</p>
                    <button class="btn-primary" style="max-width: 200px; margin: 0 auto;" onclick="AppManager.loadMarketplace()">
                        Go Shopping
                    </button>
                </div>
            `;
            return;
        }

        // Sort by date (Sold date or Created date) - Newest first
        purchases.sort((a, b) => new Date(b.sold_at || b.created_at) - new Date(a.sold_at || a.created_at));

        // Render List
        container.innerHTML = purchases.map(item => {
            const dateStr = item.sold_at ? new Date(item.sold_at).toLocaleDateString() : 'Recent';
            
            return `
            <div class="history-card">
                <div class="history-img-box">
                    <img src="${item.images[0]}" alt="${item.title}">
                </div>
                <div class="history-details">
                    <h4>${item.title}</h4>
                    <div class="history-meta">
                        <span><i class="far fa-calendar-alt"></i> Purchased: ${dateStr}</span>
                        <span><i class="fas fa-user"></i> Seller: ${item.seller_name}</span>
                        <span><i class="fas fa-tag"></i> ${item.category}</span>
                    </div>
                </div>
                <div class="history-right">
                    <span class="status-badge completed">Completed</span>
                    <div class="history-price">₱${item.price.toLocaleString()}</div>
                    <button class="btn-chat" onclick="AppManager.startChat(${item.id})" style="border:none; background:transparent; color:var(--primary); cursor:pointer; font-size:0.9rem;">
                        <i class="fas fa-comment"></i> Chat
                    </button>
                </div>
            </div>
            `;
        }).join('');
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
        
        if (loginCard && registerCard) {
            loginCard.classList.add('active');
            registerCard.classList.remove('active');
        }
    }

    static showRegisterForm() {
        const loginCard = document.getElementById('login-card');
        const registerCard = document.getElementById('register-card');
        
        if (loginCard && registerCard) {
            loginCard.classList.remove('active');
            registerCard.classList.add('active');
            this.goToStep(1);
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
        const featuredContainer = document.getElementById('featured-items');
        const recentContainer = document.getElementById('recent-items');
        
        if (featuredContainer) {
            this.renderItems(items.slice(0, 4), featuredContainer);
        }
        
        if (recentContainer) {
            this.renderItems(items.slice(0, 2), recentContainer);
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
        // ==================== RENDER ITEMS (UPDATED) ====================
    
    static renderItems(items, container) {
        if (!container) return;
        
        container.innerHTML = '';
        
        if (items.length === 0) {
            container.innerHTML = `
                <div class="no-items" style="grid-column: 1 / -1; text-align: center; padding: 60px 20px;">
                    <i class="fas fa-box-open" style="font-size: 3rem; color: #ddd; margin-bottom: 15px;"></i>
                    <p style="color: #888;">No items found matching your criteria</p>
                </div>
            `;
            return;
        }
        
        const currentUser = this.db.getCurrentUser();
        
        items.forEach(item => {
            const isInWishlist = currentUser ? this.db.isInWishlist(currentUser.id, item.id) : false;
            const isSeller = currentUser && currentUser.id === item.seller_id;
            
            // Generate the Chat Button logic
            // If it's my item: Show "View" or nothing
            // If it's not my item: Show "Chat" button
            let actionButtons = '';
            
            if (isSeller) {
                actionButtons = `
                    <button class="btn-sold" style="flex:1; padding:10px; background:#e9ecef; color:#666; border:none; border-radius:8px; cursor:not-allowed;" disabled>
                        <i class="fas fa-user"></i> Your Item
                    </button>
                `;
            } else {
                actionButtons = `
                    <button class="btn-chat" onclick="AppManager.startChat(${item.id})" style="flex:1; padding:10px; background:var(--light); color:var(--primary); border:none; border-radius:8px; cursor:pointer; font-weight:600; display:flex; align-items:center; justify-content:center; gap:8px; transition:all 0.2s;">
                        <i class="fas fa-comment"></i> Chat
                    </button>
                `;
            }

            const itemCard = document.createElement('div');
            itemCard.className = 'item-card';
            itemCard.innerHTML = `
                <div class="item-image">
                    <img src="${item.images[0]}" alt="${item.title}">
                    <span class="item-status ${item.status}">${item.status.toUpperCase()}</span>
                    <button class="item-wishlist ${isInWishlist ? 'active' : ''}" onclick="AppManager.toggleWishlist(${item.id}, this)">
                        <i class="${isInWishlist ? 'fas' : 'far'} fa-heart"></i>
                    </button>
                </div>
                <div class="item-info">
                    <h3>${item.title}</h3>
                    <div class="item-price">₱${item.price.toLocaleString()}</div>
                    <div class="item-meta">
                        <span><i class="fas fa-user"></i> ${item.seller_name}</span>
                        <span><i class="fas fa-map-marker-alt"></i> ${item.location}</span>
                    </div>
                    <div class="item-actions" style="display:flex; gap:10px; margin-top:10px;">
                        ${actionButtons}
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
            this.db.removeFromWishlist(currentUser.id, itemId);
            icon.className = 'far fa-heart';
            this.showNotification('Removed from wishlist', 'info');
        } else {
            this.db.addToWishlist(currentUser.id, itemId);
            icon.className = 'fas fa-heart';
            this.showNotification('Added to wishlist', 'success');
        }
        
        // Update wishlist page if open
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
        const activeItems = this.db.getUserItems(userId);
        const soldItems = this.db.getSoldItems(userId);
        
        const activeContainer = document.getElementById('my-listings-items');
        const soldContainer = document.getElementById('sold-items-list');
        
        if (activeContainer) {
            this.renderItems(activeItems, activeContainer);
        }
        
        if (soldContainer) {
            this.renderItems(soldItems, soldContainer);
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

    // ==================== CHAT SYSTEM ====================
        // ==================== START CHAT LOGIC (UPDATED) ====================

    static startChat(itemId) {
        const currentUser = this.db.getCurrentUser();
        
        // 1. Check Login
        if (!currentUser) {
            alert('Please login to chat with sellers.');
            return;
        }

        const item = this.db.getItems().find(i => i.id === itemId);
        if (!item) return;

        // 2. Prevent chatting with yourself
        if (currentUser.id === item.seller_id) {
            alert("This is your own item!");
            return;
        }

        // 3. Create or Get Existing Chat ID
        // This method checks if a chat already exists for this item/users
        const chat = this.db.createChat(currentUser.id, item.seller_id, itemId);
        
        // 4. Load the Chat Page
        this.loadChat();

        // 5. Automatically Open the specific chat
        // We use setTimeout to ensure the DOM (Sidebar list) is rendered before we try to click it
        setTimeout(() => {
            this.openChat(chat.id);
        }, 100);
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
        // ==================== NOTIFICATIONS LOGIC ====================

    static loadNotificationsPage() {
        this.currentPage = 'notifications';
        const app = document.getElementById('app');
        
        // 1. Template
        const template = document.getElementById('templates').querySelector('#notifications-page');
        const clone = template.cloneNode(true);
        clone.removeAttribute('id');
        app.innerHTML = '';
        app.appendChild(clone);
        
        // 2. Sidebar Info
        const user = this.db.getCurrentUser();
        if (user) {
            const sbName = document.getElementById('sidebar-name-notif');
            const sbEmail = document.getElementById('sidebar-email-notif');
            const sbCourse = document.getElementById('sidebar-course-notif');
            const sbAvatar = document.getElementById('sidebar-avatar-notif');
            
            if(sbName) sbName.textContent = user.full_name;
            if(sbEmail) sbEmail.textContent = user.email;
            if(sbCourse) sbCourse.textContent = user.course;
            if(sbAvatar) sbAvatar.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(user.full_name)}&background=003366&color=fff`;
            
            // 3. Load List
            this.loadNotificationsList();
        }
        
        this.initMobileMenu();
    }

    static loadNotificationsList() {
        const currentUser = this.db.getCurrentUser();
        if (!currentUser) return;

        const notifications = this.db.getNotifications(currentUser.id);
        const container = document.getElementById('notifications-container');
        
        if (!container) return;
        
        // Sort by newest
        notifications.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

        if (notifications.length === 0) {
            // FIXED EMPTY STATE STYLING
            container.innerHTML = `
                <div class="empty-state" style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 300px; color: var(--gray);">
                    <i class="fas fa-bell-slash" style="font-size: 4rem; margin-bottom: 20px; opacity: 0.3;"></i>
                    <p style="font-size: 1.1rem;">No notifications yet</p>
                    <small>We'll let you know when something happens!</small>
                </div>
            `;
            return;
        }

        let html = '';
        notifications.forEach(notification => {
            const timeAgo = this.getTimeAgo(new Date(notification.created_at));
            
            html += `
                <div class="notification-item ${notification.read ? 'read' : 'unread'}" 
                     style="display: flex; gap: 15px; padding: 20px; border-bottom: 1px solid #eee; background: ${notification.read ? 'white' : '#f0f7ff'}; transition: background 0.3s;">
                    
                    <div style="flex-shrink: 0; width: 40px; height: 40px; background: ${notification.read ? '#eee' : '#e3f2fd'}; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: var(--primary);">
                        <i class="fas fa-${this.getNotificationIcon(notification.type)}"></i>
                    </div>
                    
                    <div style="flex: 1;">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                            <h4 style="margin: 0; color: var(--dark); font-size: 1rem;">${notification.title}</h4>
                            <small style="color: var(--gray);">${timeAgo}</small>
                        </div>
                        <p style="margin: 0; color: #555; font-size: 0.95rem;">${notification.message}</p>
                    </div>
                    
                    ${!notification.read ? '<div style="width: 10px; height: 10px; background: var(--accent); border-radius: 50%; margin-top: 5px;"></div>' : ''}
                </div>
            `;
        });
        
        container.innerHTML = html;
    }

    // Helper for "Time Ago" (e.g., "2 hours ago")
    static getTimeAgo(date) {
        const seconds = Math.floor((new Date() - date) / 1000);
        
        let interval = seconds / 31536000;
        if (interval > 1) return Math.floor(interval) + " years ago";
        
        interval = seconds / 2592000;
        if (interval > 1) return Math.floor(interval) + " months ago";
        
        interval = seconds / 86400;
        if (interval > 1) return Math.floor(interval) + " days ago";
        
        interval = seconds / 3600;
        if (interval > 1) return Math.floor(interval) + " hours ago";
        
        interval = seconds / 60;
        if (interval > 1) return Math.floor(interval) + " minutes ago";
        
        return "Just now";
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
        const subcategory = document.getElementById('item-subcategory').value;
        const programs = Array.from(document.getElementById('item-programs').selectedOptions).map(opt => opt.value);

        if (!title || !price || !description || !location || !category) {
            this.showNotification('Please fill in all required fields', 'error');
            return;
        }

        const itemData = {
            title: title,
            price: price,
            images: ["https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=300&fit=crop"], // Default image for demo
            status: "available",
            category: category,
            subcategory: subcategory || '',
            seller_id: currentUser.id,
            seller_name: currentUser.full_name,
            location: location,
            description: description,
            programs: programs,
            views: 0,
            wishlist_count: 0
        };

        this.db.addItem(itemData);
        
        this.showNotification('Item posted successfully!', 'success');
        
        setTimeout(() => {
            this.loadMarketplace();
        }, 1500);
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