import axios from 'axios';

export class InstagramTokenManager {
  private longLivedToken: string; // Almacena el token de acceso actual.
  private readonly refreshUrl: string = 'https://graph.instagram.com/refresh_access_token'; // URL para renovar el token.
  private readonly refreshIntervalDays: number = 50; // Intervalo para renovación (en días).
  private lastRefreshed: Date; // Última vez que el token fue renovado.

  constructor(initialToken: string) {
    this.longLivedToken = initialToken; // Inicializa con un token dado.
    this.lastRefreshed = new Date(); // Asume que el token fue generado hoy.
  }

  /**
   * Método privado para renovar el token.
   * Llama al endpoint de la API de Instagram para obtener un nuevo token de acceso.
   */
  private async refreshToken(): Promise<void> {
    try {
      const response = await axios.get(this.refreshUrl, {
        params: {
          grant_type: 'ig_refresh_token', // Tipo de solicitud para renovar el token.
          access_token: this.longLivedToken, // Token actual que será renovado.
        },
      });

      if (response.data && response.data.access_token) {
        // Actualiza el token y la fecha de última renovación.
        this.longLivedToken = response.data.access_token;
        this.lastRefreshed = new Date();
        // console.log('Token successfully refreshed:', this.longLivedToken);
      } else {
        console.error('Failed to refresh token:', response.data);
      }
    } catch (error) {
      console.error('Error refreshing token:', error);
    }
  }

  /**
   * Método público que verifica si el token necesita ser renovado.
   * Si han pasado más de `refreshIntervalDays`, llama a `refreshToken`.
   */
  public async checkAndRefreshToken(): Promise<void> {
    const now = new Date(); // Fecha actual.
    const daysSinceLastRefresh =
      (now.getTime() - this.lastRefreshed.getTime()) / (1000 * 60 * 60 * 24); // Diferencia en días.

    if (daysSinceLastRefresh >= this.refreshIntervalDays) {
      console.log('Token is due for a refresh. Refreshing...');
      await this.refreshToken(); // Renueva el token si es necesario.
    } else {
      console.log('Token is still valid. No refresh needed.');
    }
  }

  /**
   * Método público para obtener el token actual.
   * Útil para otras partes de la aplicación que necesitan usar el token.
   */
  public getToken(): string {
    return this.longLivedToken;
  }
}
