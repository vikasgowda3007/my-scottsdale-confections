import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

type PartyPackageType = 'cupcake' | 'cookie';

@Component({
  selector: 'msc-parties',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './parties.html',
  styleUrl: './parties.scss'
})
export class Parties {
  cupcakeDepositUrl = 'https://buy.stripe.com/test_5kQ14n8WX0q10cT6ww3sI01'
  cookieDepositUrl = 'https://buy.stripe.com/test_6oU28rfll6OpgbRf323sI00'
  partyThemes: string[] = [
    'Barbie Dream Party',
    'Lilo & Stitch Beach Party',
    'Disney Princess Tea Party',
    'Rainbow Sprinkles',
    'Custom Theme (tell us your idea!)'
  ];

  party = {
    packageType: 'cupcake' as PartyPackageType,
    theme: 'Barbie Dream Party',
    kids: 8,
    date: '',
    notes: ''
  };

  partySummaryVisible = false;

  get selectedPartyPackageLabel(): string {
    return this.party.packageType === 'cupcake'
      ? 'Make Your Own Cupcake Party'
      : 'Design Your Own Cookie Party';
  }

  get selectedPartyTreatLabel(): string {
    return this.party.packageType === 'cupcake' ? 'cupcakes' : 'cookies';
  }

  get includedTreats(): number {
    // From your spec: you get 12 cookies or cupcakes with sprinkles & accessories
    return 12;
  }

  get extraTreatsNeeded(): number {
    return this.party.kids > this.includedTreats
      ? this.party.kids - this.includedTreats
      : 0;
  }

  selectPackage(type: PartyPackageType): void {
    this.party.packageType = type;
    this.partySummaryVisible = false;
  }

  onSubmitPartyForm(): void {
    this.partySummaryVisible = true;
  }

  openDepositPayment(): void {
    const url =
      this.party.packageType === 'cupcake'
        ? this.cupcakeDepositUrl
        : this.cookieDepositUrl;

    window.open(url, '_blank'); // open in new tab
  }
}
