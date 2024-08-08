import type { PassengerState, Passenger } from '@/types'
import { defineStore } from 'pinia'
export const usePassengerStore = defineStore('event', {
  state: (): PassengerState => ({
    passenger: null
  }),
  actions: {
    setPassenger(passenger: Passenger): void {
      this.passenger = passenger
    },
    resetPassenger(): void {
      this.passenger = null
    }
  }
})
