/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import * as bcrypt from 'bcrypt';

export class AdminService {
  private readonly mockAdmin = {
    id: 1,
    email: 'admin@orderease.com',
    password: bcrypt.hashSync('admin123', 10),
  };

  async validateUser(email: string, password: string): Promise<any> {
    const context = 'AdminService.validateUser';
    try {
      if (email === this.mockAdmin.email && await bcrypt.compare(password, this.mockAdmin.password)) {
        const { password, ...result } = this.mockAdmin;
        return result;
      }
      return null;
    } catch (error) {
      console.error(`[${context}]`, error);
      return null;
    }
  }

  async findOne(email: string) {
    return email === this.mockAdmin.email ? this.mockAdmin : null;
  }
}

