package com.example.myandroidapp

import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import com.google.android.gms.ads.AdRequest
import com.google.android.gms.ads.AdView
import com.google.android.gms.ads.MobileAds

class MainActivity : AppCompatActivity() {

    private lateinit var adView: AdView

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        // Initialize Google Mobile Ads SDK
        MobileAds.initialize(this) {}

        // Reference the AdView from layout
        adView = findViewById(R.id.adView)

        // Create an ad request and load the banner
        val adRequest = AdRequest.Builder().build()
        adView.loadAd(adRequest)
    }
}
