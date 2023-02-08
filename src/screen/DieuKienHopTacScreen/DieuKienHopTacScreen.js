import { StyleSheet, Text, View ,ScrollView,TouchableOpacity} from 'react-native'
import React from 'react'
import { color } from 'react-native-reanimated'
import Ionicons from 'react-native-vector-icons/Ionicons';

const DieuKienHopTacScreen = ({navigation}) => {
  const handleGoback = () => {
    navigation.pop();
  };
  return (
    <ScrollView>
      <View
      style={{
        alignItems: 'flex-start',
      }}>
      <TouchableOpacity onPress={handleGoback}>
        <Ionicons name="chevron-back-sharp" size={40} />
      </TouchableOpacity>
    </View>

    <View>
      <View>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 35,
            color: 'black',
            marginVertical: 4,
            marginTop:10,
            fontWeight: '900'
          }} 
        >
          HỢP ĐỒNG DỊCH VỤ
        </Text>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 20,
            marginVertical: 4,
            marginTop:10,
            fontWeight: '700'
          }} 
        >
        Số: …..../2017/HMC-HĐDV
        </Text>
      </View>

      <View
        style={{marginLeft:20,marginRight:20}} 
      >
        <Text 
          style={{
            textAlign: 'center',
            fontSize: 17,
            marginVertical: 4,
            marginTop:10,
            fontWeight: '500',
            textAlign: 'justify'
            
          }}
        >
        Hợp đồng dịch vụ này (“Hợp đồng”) tạo lập một thỏa thuận pháp lý 
        giữa một tổ chức hoặc cá nhân có điều kiện cung cấp Dịch vụ giúp 
        việc (“Nhân viên giúp việc”) và CÔNG TY CỔ PHẦN PHÁT TRIỂN DỊCH 
        VỤ NHÀ SẠCH HMC, một doanh nghiệp thành lập theo pháp luật Việt Nam, 
        được Sở Kế hoạch Đầu tư Hà Nội cấp Giấy Chứng nhận đăng ký doanh nghiệp 
        số 0106056281 ngày 06 tháng 12 năm 2012, đăng ký thay đổi lần thứ 8 
        ngày 18 tháng 12 năm 2015, và có địa chỉ trụ sở chính tại 
        Số 7 ngách 85/1 ngõ 85 phố Định Công Thượng, Phường Định Công, 
        Quận Hoàng Mai, Hà Nội, Việt Nam (“Công ty”). CÔNG TY cung cấp 
        một ứng dụng phần mềm cài đặt trên điện thoại thông minh hoặc 
        thiết bị di động khác cho Nhân viên giúp việc để sử dụng Dịch vụ kết nối. 
        Dịch vụ kết nối giúp cho Nhân viên giúp việc tìm kiếm, nhận và thực hiện 
        đầy đủ các yêu cầu Dịch vụ giúp việc từ Khách hàng. Nhân viên giúp việc
        mong muốn ký Hợp đồng này cho mục đích tiếp cận và sử dụng Dịch vụ kết nối 
        để nâng cao hiệu quả hoạt động cung cấp Dịch vụ giúp việc cá nhân.
        </Text>

      </View>

      <View
        style={{marginLeft:20,marginRight:20}} 
      >
        <Text 
          style={{
            textAlign: 'center',
            fontSize: 17,
            marginVertical: 4,
            marginTop:10,
            fontWeight: '500',
            textAlign: 'justify'
            
          }}
        >
        Nhân viên giúp việc công nhận và đồng ý rằng, 
        việc kết nối để cung cấp Dịch vụ giúp việc cho một Khách hàng 
        nhất định chỉ được thực hiện từng lần một; và có sự khác biệt thời gian, 
        tính chất, phạm vi công việc thực hiện theo Dịch vụ giúp việc cho các 
        Nhân viên giúp việc khác nhau tại các lần kết nối khác nhau. 
        Do đó, việc cung cấp Dịch vụ giúp việc không phải là việc làm thường xuyên 
        các công việc gia đình theo quy định tại Khoản 1 Điều 179 Bộ luật Lao động
         và Khoản 3 Điều 3 Nghị định 27/2014/NĐ-CP do Chính phủ ban hành ngày 
         07 tháng 4 năm 2014 hướng dẫn Bộ luật Lao động về lao động là Nhân viên
         Người giúp việc gia đình. Công ty là một doanh nghiệp cung cấp dịch vụ 
         công nghệ và không cung cấp dịch vụ việc làm, không có chức năng của doanh 
         nghiệp hoạt động dịch vụ việc làm.
        </Text>

      </View>

      <View style={{marginLeft:20,marginRight:20}} >
        <Text 
        style={{
          textAlign: 'center',
          fontSize: 17,
          marginVertical: 4,
          marginTop:10,
          fontWeight: '500',
          textAlign: 'justify',
          color: 'black'
        }}>
        1. Sử dụng dịch vụ kết nối
        </Text>
      </View>

      <View style={{marginLeft:20,marginRight:20}} >
        <Text 
        style={{
          textAlign: 'center',
          fontSize: 17,
          marginVertical: 4,
          marginTop:1,
          fontWeight: '500',
          textAlign: 'justify'
        }}>
        1.1. Tài khoản Nhân viên giúp việc.
        </Text>
      </View>

      <View style={{marginLeft:20,marginRight:20}} >
        <Text 
        style={{
          textAlign: 'center',
          fontSize: 17,
          marginVertical: 4,
          marginTop:1,
          fontWeight: '500',
          textAlign: 'justify'
        }}>
        Công ty sẽ cấp cho Nhân viên giúp việc một tài khoản cho phép 
        Nhân viên giúp việc truy cập và sử dụng Ứng dụng Nhân viên giúp việc 
        trên một thiết bị phù hợp với Hợp đồng này. Nhân viên giúp việc đồng ý 
        rằng sẽ giữ bảo mật tài khoản của mình và không chia sẻ tài khoản của mình 
        với bất kỳ bên thứ ba nào.

        </Text>
      </View>

      <View style={{marginLeft:20,marginRight:20}} >
        <Text 
        style={{
          textAlign: 'center',
          fontSize: 17,
          marginVertical: 4,
          marginTop:1,
          fontWeight: '500',
          textAlign: 'justify'
        }}>
        1.2. Cung cấp Dịch vụ giúp việc.
        </Text>
      </View>

      <View style={{marginLeft:20,marginRight:20}} >
        <Text 
        style={{
          textAlign: 'center',
          fontSize: 17,
          marginVertical: 4,
          marginTop:1,
          fontWeight: '500',
          textAlign: 'justify'
        }}>
        Khi Ứng dụng Nhân viên giúp việc hoạt động, các yêu cầu của Khách hàng 
        đối với các dịch vụ giúp việc có thể xuất hiện đối với Nhân viên giúp việc.
        Nếu Nhân viên giúp việc chấp nhận yêu cầu dịch vụ giúp việc của Khách hàng,
        dịch vụ kết nối sẽ cung cấp một số thông tin Khách hàng cho Nhân viên giúp 
        việc thông qua Ứng dụng. Để tăng cường sự hài lòng của Khách hàng, Nhân viên 
        giúp việc nên chủ động liên hệ với Khách hàng và có mặt tại vị trí nơi thực 
        hiện công việc trước thời điểm bắt đầu thực hiện công việc theo yêu cầu của 
        Khách hàng. Nhân viên giúp việc thừa nhận và đồng ý rằng một khi Nhân viên giúp
        việc đã chấp nhận yêu cầu dịch vụ giúp việc của Khách hàng, Ứng dụng di động
        Công ty có thể cung cấp một số thông tin về Nhân viên giúp việc cho Khách
        hàng, bao gồm tên, thông tin liên hệ, số Chứng minh nhân dân/Hộ Chiếu/Giấy
        tờ tuỳ thân khác, hình ảnh và vị trí, kinh nghiệm làm việc. Nhân viên giúp
        việc cam kết không liên hệ với bất kỳ Khách hàng hoặc sử dụng bất kỳ thông
        tin cá nhân nào của Khách hàng vì bất kỳ lý do nào ngoài mục đích thực 
        hiện các dịch vụ giúp việc.

        </Text>
      </View>

      <View style={{marginLeft:20,marginRight:20}} >
        <Text 
        style={{
          textAlign: 'center',
          fontSize: 17,
          marginVertical: 4,
          marginTop:1,
          fontWeight: '500',
          textAlign: 'justify',
          color: 'red',
          
        }}>
        Nhân viên giúp việc thừa nhận và đồng ý rằng:
        </Text>
      </View>

      <View style={{marginLeft:20,marginRight:20}} >
        <Text 
        style={{
          textAlign: 'center',
          fontSize: 17,
          marginVertical: 4,
          marginTop:1,
          fontWeight: '500',
          textAlign: 'justify'
        }}>
        (a) Nhân viên giúp việc là người chịu trách nhiệm duy nhất đối 
        với việc thực hiện, và quyết định cách thức hiệu quả, hữu hiệu 
        và an toàn nhất để thực hiện Dịch vụ giúp việc đối với từng trường hợp.

        </Text>

        <Text 
        style={{
          textAlign: 'center',
          fontSize: 17,
          marginVertical: 4,
          marginTop:1,
          fontWeight: '500',
          textAlign: 'justify'
        }}>
        (b) Ngoại trừ Dịch vụ kết nối hoặc bất kỳ Thiết bị Công ty nào (nếu có), 
        Nhân viên giúp việc phải chuẩn bị tất cả các thiết bị, công cụ và những thứ
        cần thiết khác, với chi phí do Nhân viên giúp việc chịu, để thực hiện các 
        Dịch vụ giúp việc, bao gồm nhưng không giới hạn việc chuẩn bị Dụng cụ phù hợp
        để thực hiện công việc theo yêu cầu của Khách hàng.

        </Text>
      </View>

      <View style={{marginLeft:20,marginRight:20}} >
        <Text 
        style={{
          textAlign: 'center',
          fontSize: 17,
          marginVertical: 4,
          marginTop:1,
          fontWeight: '500',
          textAlign: 'justify'
        }}>
        1.3. Mối quan hệ giữa Nhân viên giúp việc Và Khách hàng.
        </Text>
      </View>

      <View style={{marginLeft:20,marginRight:20}} >
        <Text 
        style={{
          textAlign: 'center',
          fontSize: 17,
          marginVertical: 4,
          marginTop:1,
          fontWeight: '500',
          textAlign: 'justify'
        }}>
         Nhân viên giúp việc thừa nhận và đồng ý rằng Nhân viên giúp việc cung 
         cấp Dịch vụ giúp việc từng lần theo yêu cầu của Khách hàng thông qua Dịch
         vụ kết nối, do đó không thực hiện một công việc thường xuyên, và không phải 
         người lao động của Khách hàng trong bất kỳ trường hợp nào, mà chỉ là bên cung 
         cấp dịch vụ. Việc Nhân viên giúp việc cung cấp Dịch vụ giúp việc cho Khách hàng 
         tạo ra một giao dịch trực tiếp giữa Nhân viên giúp việc và Khách hàng. Nhân 
         viên giúp việc sẽ là người chịu trách nhiệm duy nhất cho bất kỳ nghĩa vụ hoặc 
         trách nhiệm nào với Khách hàng hoặc các bên thứ ba phát sinh từ việc cung cấp 
         Dịch vụ giúp việc. 

        </Text>
      </View>




      
    </View>
    </ScrollView>
  )
}

export default DieuKienHopTacScreen

const styles = StyleSheet.create({})