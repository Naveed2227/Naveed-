declare module '*.json' {
  const value: Array<{
    id: string | number;
    name: string;
    type: string;
    faction: string;
    tier: string;
    image: string;
    stats: {
      health: number;
      speed: number;
      [key: string]: any;
    };
    weapons: Array<{
      name: string;
      type: string;
      damage: number;
      penetration: number;
      reload?: number;
    }>;
    modules: {
      [key: string]: Array<{
        name: string;
        bonus: string;
      }>;
    };
    description?: string;
  }>;
  export default value;
}
