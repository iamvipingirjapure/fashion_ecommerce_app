Folder Structure 
`
/your-app/
│
├── /assets/                     # Static assets (images, fonts, icons, etc.)
│   ├── /images/
│   ├── /fonts/
│   └── /icons/
│
├── /src/                        # All app source code
│   ├── /api/                    # API handlers & configurations
│   │   ├── apiClient.ts         # Axios or Fetch setup
│   │   ├── endpoints.ts
│   │   └── services/            # Grouped API calls (authService, productService)
│
│   ├── /config/                 # App-wide config (env vars, theme, etc.)
│   │   ├── theme.ts
│   │   ├── colors.ts
│   │   └── env.ts
│
│   ├── /constants/              # Constants, enums, static data
│   │   ├── strings.ts
│   │   └── appConfig.ts
│
│   ├── /navigation/             # Navigation stacks
│   │   ├── AppNavigator.tsx
│   │   └── routeNames.ts
│
│   ├── /components/             # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── ProductCard.tsx
│   │   └── /common/             # e.g., Header, Footer, Modal, Loader
│
│   ├── /features/               # Modular feature-based organization
│   │   ├── /auth/
│   │   │   ├── screens/
│   │   │   ├── components/
│   │   │   ├── hooks/
│   │   │   └── authSlice.ts     # (if using Redux Toolkit or Zustand)
│   │   ├── /home/
│   │   ├── /product/
│   │   ├── /cart/
│   │   ├── /checkout/
│   │   └── /profile/
│
│   ├── /hooks/                  # Custom React hooks
│   │   ├── useAuth.ts
│   │   └── useDebounce.ts
│
│   ├── /store/                  # Global state (Redux, Zustand, or Context)
│   │   ├── store.ts
│   │   └── slices/              # Feature-specific slices or reducers
│
│   ├── /utils/                  # Utility functions
│   │   ├── formatPrice.ts
│   │   └── validators.ts
│
│   ├── App.tsx                  # App root
│   └── index.tsx
│
├── /__tests__/                  # Unit & integration tests
│
├── android/                     # Native Android files
├── ios/                         # Native iOS files
├── .env                         # Environment variables
├── app.json / expo.json
├── package.json
└── README.md
`

Fonts Family : Poppins