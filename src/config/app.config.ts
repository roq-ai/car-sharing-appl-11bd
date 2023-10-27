interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Business Owner', 'Team Member'],
  tenantName: 'Company',
  applicationName: 'Car Sharing Application',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Create bookings', 'Read car details', 'Read company details', 'Create reviews'],
  ownerAbilities: [
    'Manage users',
    'Manage companies',
    'Manage cars',
    'Manage bookings',
    'Manage reviews',
    'Manage team members',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/daffd8af-3a60-4541-a96e-b5665fbffbba',
};
