package app.mwtassistantunofficial.android

import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import com.google.android.gms.ads.AdRequest
import com.google.android.gms.ads.AdView
import com.google.android.gms.ads.MobileAds

class MainActivity : AppCompatActivity() {

    private lateinit var adViewTop: AdView
    private lateinit var adViewBanner1: AdView

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        // Initialize Google Mobile Ads SDK
        MobileAds.initialize(this) {}

        // Reference the AdViews
        adViewTop = findViewById(R.id.adViewTop)
        adViewBanner1 = findViewById(R.id.adViewBanner1)

        // Load ads
        val adRequestTop = AdRequest.Builder().build()
        adViewTop.loadAd(adRequestTop)

        val adRequestBanner1 = AdRequest.Builder().build()
        adViewBanner1.loadAd(adRequestBanner1)
    }
}
