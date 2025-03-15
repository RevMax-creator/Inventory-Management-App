# Inventory Management App

A simple and efficient inventory management app built with React Native. This application allows users to track stock levels, manage items, and keep inventory organized with ease. Featuring an intuitive UI and color-coded stock indicators, it provides a seamless experience for inventory management.

---

## 📌 Features

### 🗂 View All Items  
- Displays all inventory items in a structured list.  
- Each item is shown with its name and quantity.  
- Color-coded background to indicate stock levels:
  - 🔴 Red: Low stock (quantity < 20)
  - 🟢 Green: Sufficient stock (quantity ≥20)

### 🚨 Low Stock Alerts  
- Filters and highlights items that are running low on stock.  
- Helps users quickly identify which items need replenishment.

### ➕ Add New Items  
- Allows users to enter new inventory items with:
  - Name
  - Quantity
  - Unit (ml, kg, pcs, etc.)
- Newly added items appear in the inventory list instantly.

### ✏️ Edit Items  
- Enables users to modify existing item details.  
- Users can update item name and quantity as needed.  
- Ensures accurate inventory tracking.

### ❌ Delete Items  
- Users can remove items from the inventory.  
- Helps keep the inventory list clean and up-to-date.

### 🎨 User-Friendly UI  
- Simple and intuitive design with a clean interface.  
- Easy navigation through a tab-based menu:
  - **All Items** – Displays complete inventory.
  - **Low Stock** – Filters and shows only low-stock items.
  - **Create Item** – Allows users to add or edit items.

---

## 🚀 Installation & Setup

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [React Native](https://reactnative.dev/docs/environment-setup)
- Android Studio / Xcode (for emulators or real device testing)

### Steps to Run the App
1. Clone the repository:
   ```sh
   git clone https://github.com/RevMax-creator/Inventory-Management-App.git
   cd Inventory-Management-App
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start Metro Bundler:
   ```sh
   npx react-native start
   ```
4. Run the app on an emulator or real device:
   - For Android:
     ```sh
     npx react-native run-android
     ```
   - For iOS:
     ```sh
     npx react-native run-ios
     ```

---

## 📂 Project Structure
```
📦 inventory-app
├── 📂 src
│   ├── 📂 components
│   │   ├── AllItems.jsx  # Displays all inventory items
│   │   ├── CreateItem.jsx  # Allows adding/editing items
│   ├── 📂 screens
│   │   ├── HomeScreen.jsx  # Main dashboard of the app
│   ├── 📂 assets  # Stores app assets (icons, images, etc.)
├── App.jsx  # Root component
├── package.json  # Dependencies and scripts
└── README.md  # Project documentation
```

---

## 🛠️ Technologies Used
- **React Native** – UI and functionality
- **React Hooks** – State management
- **React Native Vector Icons** – Icons for edit/delete buttons
- **JavaScript (ES7+)** – Core logic

---

## 🤝 Contribution
Contributions are welcome! Feel free to fork the repository and submit pull requests.

### How to Contribute:
1. Fork the repository.
2. Create a new branch:
   ```sh
   git checkout -b feature-name
   ```
3. Make your changes and commit them:
   ```sh
   git commit -m "Added new feature"
   ```
4. Push to your forked repository:
   ```sh
   git push origin feature-name
   ```
5. Open a Pull Request.

---

## 📝 License
This project is open-source and available under the [Modified Creative Commons License](https://github.com/RevMax-creator/Inventory-Management-System-React-Native?tab=License-1-ov-file).

---

## 📞 Contact
For any queries or suggestions, feel free to reach out:
- GitHub: [RevMax-creator](https://github.com/RevMax-creator)
<!-- - Email: your-email@example.com -->

Happy coding! 🚀
