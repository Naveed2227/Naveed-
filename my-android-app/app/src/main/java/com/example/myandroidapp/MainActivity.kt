package app.mwtassistantunofficial.android

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

        // Reference the AdView
        adView = findViewById(R.id.adView)

        // Load a banner ad
        val adRequest = AdRequest.Builder().build()
        adView.loadAd(adRequest)
    }
}
