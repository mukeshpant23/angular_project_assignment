import { Injectable } from '@angular/core';

import { EventEmitter } from '@angular/core';
@Injectable()
export class EmmiterServiceService {
  private static _emitters: { [channel: string]: EventEmitter<any> } = {};
  static get(channel: string): EventEmitter<any> {
    if (!this._emitters[channel]) {
      this._emitters[channel] = new EventEmitter();
    }
    return this._emitters[channel];
  }

}