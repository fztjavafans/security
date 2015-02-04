package com.app.plugin.security;

import java.security.MessageDigest;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CordovaWebView;
import org.json.JSONArray;
import org.json.JSONException;

import com.zihexin.pay.model.common.ThreeDES;

public class Security extends CordovaPlugin {
	
	private static final String DES_KEY = "12345678901234567890123456789012";
	private static final String MD5_KEY = "12345678901234567890123456789012";
	private static final String CHARSET_UTF8 = "UTF-8";
	
	@Override
	public boolean execute(String action, JSONArray args,
			CallbackContext callbackContext) throws JSONException {
		String ret = "";
		String text = args.getString(0);
		if ("encrypt".equals(action)) {
			ret = encrypt(text);
		} else if ("decrypt".equals(action)) {
			ret = decrypt(text);
		} else if ("md5".equals(action)) {
			ret = MD5encrypt(text + MD5_KEY, CHARSET_UTF8);
		} else {
			return false;
		}
		
		if(args != null && !"".equals(args)) {
			JSONArray json = new JSONArray();
			json.put(ret);
			callbackContext.success(json);
			return true;
		}
		return false;
	}
	
	@Override
	public void initialize(CordovaInterface cordova, CordovaWebView webView) {
	    super.initialize(cordova, webView);
	    // your init code here
	}
	
	private static String encrypt(String text) {
		return ThreeDES.encrypt(DES_KEY, text);
	}
	
	private static String decrypt(String text) {
		return ThreeDES.decrypt(DES_KEY, text);
	}
	
	private static String MD5encrypt(String s, String charSet) {
        // 用作十六进制的数组.
        byte hexDigits[] = { '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f' };
        try {
            MessageDigest mdTemp = MessageDigest.getInstance("MD5");// 使用MD5加密
            byte[] strTemp = s.getBytes(charSet);// 把传入的字符串转换成字节数组
            mdTemp.update(strTemp);//
            byte[] md = mdTemp.digest();
            int j = md.length;
            byte str[] = new byte[j * 2];
            int k = 0;
            for (int i = 0; i < j; i++) {
                byte byte0 = md[i];
                str[k++] = hexDigits[byte0 >>> 4 & 0xf];
                str[k++] = hexDigits[byte0 & 0xf];
            }
            return new String(str);// 返回加密后的字符串.
        } catch (Exception e) {
            return null;
        }
    }
}
