package com.atrilhadigital.victor.opticity;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.webkit.WebView;
import android.webkit.WebViewClient;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        WebView browser = (WebView) findViewById(R.id.webView);

        browser.getSettings().setJavaScriptEnabled(true);
        browser.setWebViewClient(new HelloWebViewClient());

        browser.loadUrl("http://overheadcyber.esy.es/app/index.html");
        //browser.loadUrl("192.168.2.74/app/index.html");

    }

    private class HelloWebViewClient extends WebViewClient {
        @Override
        public boolean shouldOverrideUrlLoading(WebView view, String url) {
            view.loadUrl(url);
            return true;
        }
    }

}
